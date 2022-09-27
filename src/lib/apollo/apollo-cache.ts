import { FieldPolicy } from '@apollo/client';
import { ReadFieldFunction } from '@apollo/client/cache/core/types/common';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export type Cursor = string;

type ConnectionResponseEdge<
  EdgeTypeName extends string = any,
  NodeTypeName extends string = any,
  NodeT extends { __typename: NodeTypeName } = { __typename: NodeTypeName },
> = {
  __typename: EdgeTypeName;
  cursor: Cursor;
  node: NodeT;
};

// Generic invotra GraphQL connection response type.
export type ConnectionResponseField<
  ConnectionTypeName extends string = any,
  EdgeTypeName extends string = any,
  NodeTypeName extends string = any,
  NodeT extends { __typename: NodeTypeName } = { __typename: NodeTypeName },
> = {
  __typename: ConnectionTypeName;
  totalCount?: number;
  pageInfo?: {
    __typename: 'PageInfo';
    hasNextPage: boolean;
    lastCursor: Cursor;
  };
  edges?: ConnectionResponseEdge<EdgeTypeName, NodeTypeName, NodeT>[];
};

function offsetFromCursor(
  items: ConnectionResponseEdge[],
  cursor: Cursor,
  readField: ReadFieldFunction,
) {
  // Search from the back of the list because the cursor we're
  // looking for is typically the ID of the last item.
  for (let i = items.length - 1; i >= 0; --i) {
    const item = items[i];
    // Using readField works for both non-normalized objects
    // (returning item.id) and normalized references (returning
    // the id field from the referenced entity object), so it's
    // a good idea to use readField when you're not sure what
    // kind of elements you're dealing with.
    if (readField('cursor', item) === cursor) {
      // Add one because the cursor identifies the item just
      // before the first item in the page we care about.
      return i + 1;
    }
  }

  // Report that the cursor could not be found.
  return -1;
}

// This is a generic Apollo FieldPolicy factory usable for most GraphQL connections in invotra.
// @see https://www.apollographql.com/docs/react/pagination/cursor-based/
export const getConnectionFieldMergePolicy = <
  ConnectionTypeName extends string,
  EdgeTypeName extends string,
  NodeTypeName extends string,
>(
    keyArgs: string[] = [],
  ): FieldPolicy<
  ConnectionResponseField<ConnectionTypeName, EdgeTypeName, NodeTypeName>
  > => ({
  // The keyArgs is a custom callback which makes sure Apollo would use separate cache entries for
  // filtered/ordered data but at the same time it would allow merging pagination requests.
    keyArgs: ['filter', 'filterOrder', ...keyArgs],

    // Merge function is used to join results of few sequential paging requests.
    merge(existing, incoming, { args, readField }) {
      if (existing === undefined || args?.after === undefined) {
        // Just store the new value if the cache is empty.
        return incoming;
      }

      const after = args?.after || undefined;
      if (typeof after !== 'string' && after !== undefined) {
        // The cursor (after) argument should be either string or undefined.
        // This is a safety check intended to
        throw new Error('Invalid cursor (after) value');
      }

      // Calculate a new list of edges.
      // We're starting from the cached edges list (if set) or empty array if that's not set yet.
      let mergedEdges = existing?.edges ? existing.edges.slice(0) : [];

      // Update or replace the list of connection edges.
      if (incoming.edges !== undefined) {
        // Append new edges to the list if cursor is available.
        // Otherwise, consider this is a new query replacing edges list.
        if (after !== undefined) {
          // TODO: Move incoming data validation to a separate method.
          if (incoming.edges[0] && incoming.edges[0].cursor === undefined) {
            throw new Error(
              'The Apollo cache merge function relies on `cursor` field to be present inside'
            + ' `edges`. Consider including `cursor` in your GraphQL query.',
            );
          }
          let offset = offsetFromCursor(mergedEdges, after, readField);
          // If we couldn't find the cursor, default to appending to
          // the end of the list, so we don't lose any data.
          // TODO: Review this. This behavior was suggested by Apollo docs but it could be worth
          // TODO: resetting cache if the previous cache value doesn't have an item with a cursor
          // TODO: we're looking at. It could be even worth throwing error, who knows? In any case,
          // TODO: this is more like an edge case which should even happen.
          if (offset < 0) {
            offset = mergedEdges.length;
          }

          // Now that we have a reliable offset, insert/append new edges to the cache.
          for (let i = 0; i < incoming.edges.length; ++i) {
            mergedEdges[offset + i] = incoming.edges[i];
          }
        } else {
          // Cursor is not set; consider this query is replacing the previous list.
          mergedEdges = incoming.edges;
        }
      }

      // Check if the next page is set.
      // Try to retrieve the boolean value from a new query; if it's not set, it would mean the
      // query response didn't include it.
      const hasNextPage = incoming?.pageInfo?.hasNextPage !== undefined
        ? incoming?.pageInfo?.hasNextPage
        : existing?.pageInfo?.hasNextPage;

      // Strict undefined check is intentional. The incoming data object may have totalCount value
      // 0 which is falsy. In this case if we were using || operator zero value could be
      // unintentionally replaced by undefined which would cause Apollo thinking there was a fetch
      // error since the expected value type (number) doesn't match the returned type (undefined).
      const totalCount = incoming.totalCount !== undefined
        ? incoming.totalCount
        : existing?.totalCount;

      const merged: ConnectionResponseField<
      ConnectionTypeName,
      EdgeTypeName,
      NodeTypeName
      > = {
        __typename: incoming.__typename,
        pageInfo:
      hasNextPage !== undefined
        ? {
          __typename: 'PageInfo',
          // The lastCursor value should be an empty string if there are no edges at all. That's
          // the same value as GraphQL returns.
          lastCursor: mergedEdges.length
            ? mergedEdges[mergedEdges.length - 1].cursor
            : '',
          hasNextPage,
        }
        : undefined,
        edges: mergedEdges,
        totalCount,
      };

      if (totalCount !== undefined && mergedEdges.length > totalCount) {
        throw new Error(
          'The number of edges in a cache is higher than a total count which is not possible; this'
        + ' is likely a bug',
        );
      }

      return merged;
    },
  });

const extractAmzPathAndTimestamp = (
  urlString: string,
): [string, number] | null => {
  try {
    const url = new URL(urlString);
    const path = urlString.split('?')[0];
    const amzDate = url.searchParams.get('X-Amz-Date');
    return amzDate
      ? [path, dayjs(amzDate, 'YYYYMMDDTHHmmssZ', false).unix()]
      : null;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error extracting timestamp from signed URL: ', e);
    return null;
  }
};

export const imageDownloadUrlFieldMergePolicy = (): FieldPolicy<
string | null
> => ({
  merge: (existing, incoming) => {
    // Return cached value if the incoming is null and there's already something stored in cache.
    // This is a fix for an edge case when an image was uploaded but not yet processed by backend
    // while we have a local copy of image (e.g. as data URL).
    if (incoming === null && existing !== undefined) {
      return existing;
    }

    // Return same existing URL if the image path is same and the timestamp
    // difference is no more than 60 seconds.
    // This should prevent unnecessary re-loading images by browser.
    if (
      existing !== null
      && existing !== undefined
      && incoming !== null
      && incoming !== undefined
    ) {
      const existingUrlPathAndTimestamp = extractAmzPathAndTimestamp(existing);
      const incomingUrlPathAndTimestamp = extractAmzPathAndTimestamp(incoming);
      if (
        existingUrlPathAndTimestamp !== null
        && incomingUrlPathAndTimestamp !== null
        && existingUrlPathAndTimestamp[0] === incomingUrlPathAndTimestamp[0]
        && incomingUrlPathAndTimestamp[1] - existingUrlPathAndTimestamp[1] <= 60
      ) {
        return existing;
      }
    }

    return incoming;
  },
});
