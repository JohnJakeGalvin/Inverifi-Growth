import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { CachePersistor } from 'apollo3-cache-persist';
import { Auth } from 'aws-amplify';
import { SCHEMA_VERSION, SCHEMA_VERSION_KEY } from '../../common/constants/constants';
import { AppConfig, CurrentAuthenticatedUserReturnValue } from '../../common/types/types';

export const prepareApolloClient = async (config: AppConfig) => {
  const link = new HttpLink({
    uri: config.graphqlUri,
    fetch: async (input: RequestInfo, init?: RequestInit) => {
      const user: CurrentAuthenticatedUserReturnValue = await Auth.currentAuthenticatedUser();
      const jwt = user.signInUserSession.idToken.jwtToken;

      return fetch(input, {
        ...init,
        headers: {
          ...init?.headers,
          Authorization: `Bearer ${jwt}`,
        },
      });
    },
  });

  const cache = new InMemoryCache({});

  const persistor = new CachePersistor({
    cache,
    storage: window.localStorage,
  });

  const schemaVersion = window.localStorage.getItem(SCHEMA_VERSION_KEY);

  if (schemaVersion === SCHEMA_VERSION) {
    await persistor.restore();
  } else {
    await persistor.purge();
    window.localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION);
  }

  return new ApolloClient({
    cache,
    link,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: (lastFetchPolicy) => (lastFetchPolicy === 'cache-and-network'
          ? 'cache-first'
          : lastFetchPolicy),
      },
    },
  });
};
