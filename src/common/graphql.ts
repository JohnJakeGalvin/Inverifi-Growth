import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export enum ActionType {
  Create = 'CREATE',
  Delete = 'DELETE',
  List = 'LIST',
  Update = 'UPDATE',
  View = 'VIEW'
}

export type Activity = {
  __typename?: 'Activity';
  action?: Maybe<Scalars['String']>;
  affectsContent?: Maybe<Content>;
  affectsLandingPage?: Maybe<Menu>;
  author?: Maybe<User>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  sourceType: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  edges: Array<ActivityEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  cursor: Scalars['String'];
  node: Activity;
};

export type App = {
  __typename?: 'App';
  app_name: Scalars['String'];
  app_url: Scalars['String'];
  appicon?: Maybe<MediaFile>;
  comments?: Maybe<Scalars['Boolean']>;
  contentConnection?: Maybe<AppHasContentConnection>;
  created?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  id?: Maybe<Scalars['String']>;
  machine_name: Scalars['String'];
  organisation?: Maybe<Organisation>;
  owner: Scalars['String'];
  ownsRoleConnection?: Maybe<AppOwnsRoleConnection>;
  ownsSchemaConnection?: Maybe<AppOwnsSchemaConnection>;
  preview?: Maybe<Scalars['Boolean']>;
  resource_url?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  vocabularyConnection?: Maybe<AppHasVocabularyConnection>;
  wysiwyg_comments?: Maybe<Scalars['Boolean']>;
};


export type AppContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppOwnsRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppOwnsSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppVocabularyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type AppConnection = {
  __typename?: 'AppConnection';
  edges: Array<AppEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppEdge = {
  __typename?: 'AppEdge';
  cursor: Scalars['String'];
  node: App;
};

export type AppHasContentConnection = {
  __typename?: 'AppHasContentConnection';
  edges: Array<AppHasContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppHasContentEdge = {
  __typename?: 'AppHasContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type AppHasVocabularyConnection = {
  __typename?: 'AppHasVocabularyConnection';
  edges: Array<AppHasVocabularyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppHasVocabularyEdge = {
  __typename?: 'AppHasVocabularyEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Vocabulary;
  updated?: Maybe<Scalars['String']>;
};

export type AppOwnsRoleConnection = {
  __typename?: 'AppOwnsRoleConnection';
  edges: Array<AppOwnsRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppOwnsRoleEdge = {
  __typename?: 'AppOwnsRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: AppRole;
  updated?: Maybe<Scalars['String']>;
};

export type AppOwnsSchemaConnection = {
  __typename?: 'AppOwnsSchemaConnection';
  edges: Array<AppOwnsSchemaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppOwnsSchemaEdge = {
  __typename?: 'AppOwnsSchemaEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Schema;
  updated?: Maybe<Scalars['String']>;
};

export type AppRole = {
  __typename?: 'AppRole';
  belongsToApp?: Maybe<App>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  givenToOrganisationConnection?: Maybe<AppRoleGivenToOrganisationConnection>;
  givenToTeamConnection?: Maybe<AppRoleGivenToTeamConnection>;
  givenToUserConnection?: Maybe<AppRoleGivenToUserConnection>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissionConnection?: Maybe<AppRolePermissionConnection>;
  updated?: Maybe<Scalars['String']>;
};


export type AppRoleGivenToOrganisationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppRoleGivenToTeamConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppRoleGivenToUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type AppRolePermissionConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type AppRoleConnection = {
  __typename?: 'AppRoleConnection';
  edges: Array<AppRoleEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type AppRoleEdge = {
  __typename?: 'AppRoleEdge';
  cursor: Scalars['String'];
  node: AppRole;
};

export type AppRoleGivenToOrganisationConnection = {
  __typename?: 'AppRoleGivenToOrganisationConnection';
  edges: Array<AppRoleGivenToOrganisationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppRoleGivenToOrganisationEdge = {
  __typename?: 'AppRoleGivenToOrganisationEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Organisation;
  updated?: Maybe<Scalars['String']>;
};

export type AppRoleGivenToTeamConnection = {
  __typename?: 'AppRoleGivenToTeamConnection';
  edges: Array<AppRoleGivenToTeamEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppRoleGivenToTeamEdge = {
  __typename?: 'AppRoleGivenToTeamEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Team;
  updated?: Maybe<Scalars['String']>;
};

export type AppRoleGivenToUserConnection = {
  __typename?: 'AppRoleGivenToUserConnection';
  edges: Array<AppRoleGivenToUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppRoleGivenToUserEdge = {
  __typename?: 'AppRoleGivenToUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type AppRolePermissionConnection = {
  __typename?: 'AppRolePermissionConnection';
  edges: Array<AppRolePermissionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AppRolePermissionEdge = {
  __typename?: 'AppRolePermissionEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Schema;
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type Badge = {
  __typename?: 'Badge';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<BadgeUserConnection>;
};


export type BadgeUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type BadgeConnection = {
  __typename?: 'BadgeConnection';
  edges: Array<BadgeEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type BadgeEdge = {
  __typename?: 'BadgeEdge';
  cursor: Scalars['String'];
  node: Badge;
};

export type BadgeUserConnection = {
  __typename?: 'BadgeUserConnection';
  edges: Array<BadgeUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BadgeUserEdge = {
  __typename?: 'BadgeUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  body: Scalars['String'];
  bookmarkedByConnection?: Maybe<CommentBookmarkedByConnection>;
  created?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isReplyToComment?: Maybe<Comment>;
  isReplyToContent?: Maybe<Content>;
  liked: Scalars['Boolean'];
  likedByConnection: UserConnection;
  likesCount: Scalars['Int'];
  mentionsConnection?: Maybe<CommentMentionsConnection>;
  parentContent: Content;
  replyConnection?: Maybe<CommentReplyConnection>;
  reportedByConnection?: Maybe<CommentReportedByConnection>;
  updated?: Maybe<Scalars['String']>;
};


export type CommentBookmarkedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type CommentLikedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type CommentMentionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type CommentReplyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type CommentReportedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type CommentBehaviourInstance = {
  __typename?: 'CommentBehaviourInstance';
  active: Scalars['Boolean'];
  name: Scalars['String'];
};

export type CommentBookmarkedByConnection = {
  __typename?: 'CommentBookmarkedByConnection';
  edges: Array<CommentBookmarkedByEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentBookmarkedByEdge = {
  __typename?: 'CommentBookmarkedByEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CommentEdge = {
  __typename?: 'CommentEdge';
  cursor: Scalars['String'];
  node: Comment;
};

export type CommentMentionsConnection = {
  __typename?: 'CommentMentionsConnection';
  edges: Array<CommentMentionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentMentionsEdge = {
  __typename?: 'CommentMentionsEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type CommentReplyConnection = {
  __typename?: 'CommentReplyConnection';
  edges: Array<CommentReplyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentReplyEdge = {
  __typename?: 'CommentReplyEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type CommentReportedByConnection = {
  __typename?: 'CommentReportedByConnection';
  edges: Array<CommentReportedByEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentReportedByEdge = {
  __typename?: 'CommentReportedByEdge';
  body?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Content = {
  __typename?: 'Content';
  activityConnection?: Maybe<ContentHasActivityConnection>;
  app?: Maybe<App>;
  author?: Maybe<User>;
  bookmarkedByConnection?: Maybe<ContentBookmarkedByConnection>;
  commentConnection?: Maybe<ContentCommentConnection>;
  created?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  hashtagConnection?: Maybe<ContentHasHashtagConnection>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<MediaFile>;
  liked: Scalars['Boolean'];
  likedByConnection: UserConnection;
  likesCount: Scalars['Int'];
  mediafileConnection?: Maybe<ContentHasMediaFileConnection>;
  mentionsConnection?: Maybe<ContentMentionsConnection>;
  menu?: Maybe<Menu>;
  organisation?: Maybe<Organisation>;
  replyConnection?: Maybe<ContentReplyConnection>;
  reportedByConnection?: Maybe<ContentReportedByConnection>;
  schema: Schema;
  taggedWithConnection?: Maybe<ContentTaggedWithConnection>;
  title: Scalars['String'];
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};


export type ContentActivityConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentBookmarkedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentDataArgs = {
  filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ContentHashtagConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentLikedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentMediafileConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentMentionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentReplyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentReportedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type ContentTaggedWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type ContentBehaviourInstance = {
  __typename?: 'ContentBehaviourInstance';
  active: Scalars['Boolean'];
  name: Scalars['String'];
};

export type ContentBookmarkedByConnection = {
  __typename?: 'ContentBookmarkedByConnection';
  edges: Array<ContentBookmarkedByEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentBookmarkedByEdge = {
  __typename?: 'ContentBookmarkedByEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type ContentCommentConnection = {
  __typename?: 'ContentCommentConnection';
  edges: Array<ContentCommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentCommentEdge = {
  __typename?: 'ContentCommentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type ContentConnection = {
  __typename?: 'ContentConnection';
  edges: Array<ContentEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContentEdge = {
  __typename?: 'ContentEdge';
  cursor: Scalars['String'];
  node: Content;
};

export type ContentHasActivityConnection = {
  __typename?: 'ContentHasActivityConnection';
  edges: Array<ContentHasActivityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentHasActivityEdge = {
  __typename?: 'ContentHasActivityEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Activity;
  updated?: Maybe<Scalars['String']>;
};

export type ContentHasHashtagConnection = {
  __typename?: 'ContentHasHashtagConnection';
  edges: Array<ContentHasHashtagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentHasHashtagEdge = {
  __typename?: 'ContentHasHashtagEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Tag;
  updated?: Maybe<Scalars['String']>;
};

export type ContentHasMediaFileConnection = {
  __typename?: 'ContentHasMediaFileConnection';
  edges: Array<ContentHasMediaFileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentHasMediaFileEdge = {
  __typename?: 'ContentHasMediaFileEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: MediaFile;
  updated?: Maybe<Scalars['String']>;
};

export type ContentMentionsConnection = {
  __typename?: 'ContentMentionsConnection';
  edges: Array<ContentMentionsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentMentionsEdge = {
  __typename?: 'ContentMentionsEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type ContentReplyConnection = {
  __typename?: 'ContentReplyConnection';
  edges: Array<ContentReplyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentReplyEdge = {
  __typename?: 'ContentReplyEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type ContentReportedByConnection = {
  __typename?: 'ContentReportedByConnection';
  edges: Array<ContentReportedByEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentReportedByEdge = {
  __typename?: 'ContentReportedByEdge';
  body?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type ContentTaggedWithConnection = {
  __typename?: 'ContentTaggedWithConnection';
  edges: Array<ContentTaggedWithEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ContentTaggedWithEdge = {
  __typename?: 'ContentTaggedWithEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Tag;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type FreeSkill = {
  __typename?: 'FreeSkill';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<FreeSkillUserConnection>;
};


export type FreeSkillUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type FreeSkillConnection = {
  __typename?: 'FreeSkillConnection';
  edges: Array<FreeSkillEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type FreeSkillEdge = {
  __typename?: 'FreeSkillEdge';
  cursor: Scalars['String'];
  node: FreeSkill;
};

export type FreeSkillUserConnection = {
  __typename?: 'FreeSkillUserConnection';
  edges: Array<FreeSkillUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FreeSkillUserEdge = {
  __typename?: 'FreeSkillUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Invitation = {
  __typename?: 'Invitation';
  created?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  invitee_id?: Maybe<Scalars['String']>;
  invitee_type?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type InvitationConnection = {
  __typename?: 'InvitationConnection';
  edges: Array<InvitationEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type InvitationEdge = {
  __typename?: 'InvitationEdge';
  cursor: Scalars['String'];
  node: Invitation;
};

export type JobRole = {
  __typename?: 'JobRole';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<JobRoleUserConnection>;
};


export type JobRoleUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type JobRoleConnection = {
  __typename?: 'JobRoleConnection';
  edges: Array<JobRoleEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type JobRoleEdge = {
  __typename?: 'JobRoleEdge';
  cursor: Scalars['String'];
  node: JobRole;
};

export type JobRoleUserConnection = {
  __typename?: 'JobRoleUserConnection';
  edges: Array<JobRoleUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type JobRoleUserEdge = {
  __typename?: 'JobRoleUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Location = {
  __typename?: 'Location';
  author?: Maybe<User>;
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  organisation?: Maybe<Organisation>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<LocationUserConnection>;
};


export type LocationUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String'];
  node: Location;
};

export type LocationUserConnection = {
  __typename?: 'LocationUserConnection';
  edges: Array<LocationUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LocationUserEdge = {
  __typename?: 'LocationUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type MediaFile = {
  __typename?: 'MediaFile';
  altText?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  created?: Maybe<Scalars['String']>;
  currentUserMembership?: Maybe<MediaFileMembershipInfo>;
  downloadUrl?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  isAppIconForConnection?: Maybe<MediaFileIsAppIconForConnection>;
  isImageForConnection?: Maybe<MediaFileIsImageForConnection>;
  isProfileImageForConnection?: Maybe<MediaFileIsProfileImageForConnection>;
  isTagImageForConnection?: Maybe<MediaFileIsTagImageForConnection>;
  membersConnection?: Maybe<MediaFileMemberConnection>;
  membershipType?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
  usedAtContentConnection?: Maybe<MediaFileUsedAtContentConnection>;
};


export type MediaFileIsAppIconForConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MediaFileIsImageForConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MediaFileIsProfileImageForConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MediaFileIsTagImageForConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MediaFileMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MediaFileUsedAtContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type MediaFileConnection = {
  __typename?: 'MediaFileConnection';
  edges: Array<MediaFileEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MediaFileEdge = {
  __typename?: 'MediaFileEdge';
  cursor: Scalars['String'];
  node: MediaFile;
};

export type MediaFileIsAppIconForConnection = {
  __typename?: 'MediaFileIsAppIconForConnection';
  edges: Array<MediaFileIsAppIconForEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaFileIsAppIconForEdge = {
  __typename?: 'MediaFileIsAppIconForEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: App;
  updated?: Maybe<Scalars['String']>;
};

export type MediaFileIsImageForConnection = {
  __typename?: 'MediaFileIsImageForConnection';
  edges: Array<MediaFileIsImageForEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaFileIsImageForEdge = {
  __typename?: 'MediaFileIsImageForEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type MediaFileIsProfileImageForConnection = {
  __typename?: 'MediaFileIsProfileImageForConnection';
  edges: Array<MediaFileIsProfileImageForEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaFileIsProfileImageForEdge = {
  __typename?: 'MediaFileIsProfileImageForEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type MediaFileIsTagImageForConnection = {
  __typename?: 'MediaFileIsTagImageForConnection';
  edges: Array<MediaFileIsTagImageForEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaFileIsTagImageForEdge = {
  __typename?: 'MediaFileIsTagImageForEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Tag;
  updated?: Maybe<Scalars['String']>;
};

export type MediaFileMemberConnection = {
  __typename?: 'MediaFileMemberConnection';
  edges: Array<MediaFileMemberEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MediaFileMemberEdge = {
  __typename?: 'MediaFileMemberEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: MediaFileMemberships;
  role?: Maybe<MediaFileMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export type MediaFileMembershipInfo = {
  __typename?: 'MediaFileMembershipInfo';
  created?: Maybe<Scalars['String']>;
  role?: Maybe<MediaFileMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export enum MediaFileMembershipTypeRole {
  Manager = 'manager'
}

export type MediaFileMemberships = User;

export type MediaFileUsedAtContentConnection = {
  __typename?: 'MediaFileUsedAtContentConnection';
  edges: Array<MediaFileUsedAtContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MediaFileUsedAtContentEdge = {
  __typename?: 'MediaFileUsedAtContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  activityConnection?: Maybe<MenuHasActivityConnection>;
  author?: Maybe<User>;
  body?: Maybe<Scalars['String']>;
  contentItemConnection?: Maybe<MenuContentItemConnection>;
  created?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  menuConnection?: Maybe<MenuMenuConnection>;
  organisation?: Maybe<Organisation>;
  parent?: Maybe<Menu>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};


export type MenuActivityConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MenuContentItemConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type MenuMenuConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type MenuConnection = {
  __typename?: 'MenuConnection';
  edges: Array<MenuEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MenuContentItemConnection = {
  __typename?: 'MenuContentItemConnection';
  edges: Array<MenuContentItemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MenuContentItemEdge = {
  __typename?: 'MenuContentItemEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type MenuEdge = {
  __typename?: 'MenuEdge';
  cursor: Scalars['String'];
  node: Menu;
};

export type MenuHasActivityConnection = {
  __typename?: 'MenuHasActivityConnection';
  edges: Array<MenuHasActivityEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MenuHasActivityEdge = {
  __typename?: 'MenuHasActivityEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Activity;
  updated?: Maybe<Scalars['String']>;
};

export type MenuMenuConnection = {
  __typename?: 'MenuMenuConnection';
  edges: Array<MenuMenuEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MenuMenuEdge = {
  __typename?: 'MenuMenuEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Menu;
  updated?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Accept an invitation to a Organisation membership */
  acceptOrganisationMembership?: Maybe<Scalars['Boolean']>;
  /**  Accept an invitation to a Team membership */
  acceptTeamMembership?: Maybe<Scalars['Boolean']>;
  addAppRolePermissionSchemaConnection?: Maybe<Scalars['Boolean']>;
  addCommentIsReplyToCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  addCommentIsReplyToContentContentConnection?: Maybe<Scalars['Boolean']>;
  addCommentLike?: Maybe<Comment>;
  addContentHasMenuMenuConnection?: Maybe<Scalars['Boolean']>;
  addContentLike?: Maybe<Content>;
  addContentTaggedWithTagConnection?: Maybe<Scalars['Boolean']>;
  addOrganisationHasMenuMenuConnection?: Maybe<Scalars['Boolean']>;
  addOrganisationHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  addTeamHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  addUserBookmarkedCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  addUserBookmarkedContentContentConnection?: Maybe<Scalars['Boolean']>;
  addUserHasLocationLocationConnection?: Maybe<Scalars['Boolean']>;
  addUserHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  addUserReportedCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  addUserReportedContentContentConnection?: Maybe<Scalars['Boolean']>;
  addUserTaggedWithTagConnection?: Maybe<Scalars['Boolean']>;
  addVocabularyHasTagTagConnection?: Maybe<Scalars['Boolean']>;
  createApp?: Maybe<App>;
  createAppRole?: Maybe<AppRole>;
  createBadge?: Maybe<Badge>;
  createComment?: Maybe<Comment>;
  createContent?: Maybe<Content>;
  createFreeSkill?: Maybe<FreeSkill>;
  createJobRole?: Maybe<JobRole>;
  createLocation?: Maybe<Location>;
  createMediaFile?: Maybe<MediaFile>;
  createMenu?: Maybe<Menu>;
  createOrganisation?: Maybe<Organisation>;
  createOrganisationalSkill?: Maybe<OrganisationalSkill>;
  createPersonType?: Maybe<PersonType>;
  createPersonalInterest?: Maybe<PersonalInterest>;
  createRoleGrade?: Maybe<RoleGrade>;
  createSchema?: Maybe<Schema>;
  createSocialProfile?: Maybe<SocialProfile>;
  createTag?: Maybe<Tag>;
  createTeam?: Maybe<Team>;
  createUser?: Maybe<User>;
  createUserTitle?: Maybe<UserTitle>;
  createVocabulary?: Maybe<Vocabulary>;
  deleteApp?: Maybe<App>;
  deleteAppRole?: Maybe<AppRole>;
  deleteBadge?: Maybe<Badge>;
  deleteComment?: Maybe<Comment>;
  deleteContent?: Maybe<Content>;
  deleteFreeSkill?: Maybe<FreeSkill>;
  deleteJobRole?: Maybe<JobRole>;
  deleteLocation?: Maybe<Location>;
  deleteMediaFile?: Maybe<MediaFile>;
  deleteMenu?: Maybe<Menu>;
  deleteOrganisation?: Maybe<Organisation>;
  deleteOrganisationalSkill?: Maybe<OrganisationalSkill>;
  deletePersonType?: Maybe<PersonType>;
  deletePersonalInterest?: Maybe<PersonalInterest>;
  deleteRoleGrade?: Maybe<RoleGrade>;
  deleteSchema?: Maybe<Schema>;
  deleteSocialProfile?: Maybe<SocialProfile>;
  deleteTag?: Maybe<Tag>;
  deleteTeam?: Maybe<Team>;
  deleteUser?: Maybe<User>;
  deleteUserTitle?: Maybe<UserTitle>;
  deleteVocabulary?: Maybe<Vocabulary>;
  /**  Disable the behaviour  */
  disableCommentBehaviour: Scalars['Boolean'];
  /**  Disable the behaviour  */
  disableContentBehaviour: Scalars['Boolean'];
  /**  Enable the behaviour  */
  enableCommentBehaviour: Scalars['Boolean'];
  /**  Enable the behaviour  */
  enableContentBehaviour: Scalars['Boolean'];
  /**  Invite a User to a Organisation membership by their email  */
  inviteToOrganisationMembershipByEmail?: Maybe<Scalars['Boolean']>;
  /**  Invite a User to a Organisation membership by their ID  */
  inviteToOrganisationMembershipById?: Maybe<Scalars['Boolean']>;
  /**  Invite a User to a Team membership by their email  */
  inviteToTeamMembershipByEmail?: Maybe<Scalars['Boolean']>;
  /**  Invite a User to a Team membership by their ID  */
  inviteToTeamMembershipById?: Maybe<Scalars['Boolean']>;
  /**  Leave a Organisation membership */
  leaveOrganisationMembership?: Maybe<Scalars['Boolean']>;
  /**  Leave a Team membership */
  leaveTeamMembership?: Maybe<Scalars['Boolean']>;
  /**  Reject an invitation to a Organisation membership */
  rejectOrganisationMembership?: Maybe<Scalars['Boolean']>;
  /**  Reject an invitation to a Team membership */
  rejectTeamMembership?: Maybe<Scalars['Boolean']>;
  removeAppRolePermissionSchemaConnection?: Maybe<Scalars['Boolean']>;
  removeCommentIsReplyToCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  removeCommentIsReplyToContentContentConnection?: Maybe<Scalars['Boolean']>;
  removeCommentLike?: Maybe<Comment>;
  removeContentHasMenuMenuConnection?: Maybe<Scalars['Boolean']>;
  removeContentLike?: Maybe<Content>;
  removeContentTaggedWithTagConnection?: Maybe<Scalars['Boolean']>;
  removeOrganisationHasMenuMenuConnection?: Maybe<Scalars['Boolean']>;
  removeOrganisationHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  /**  Remove a users Organisation membership */
  removeOrganisationMembership?: Maybe<Scalars['Boolean']>;
  removeTeamHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  /**  Remove a users Team membership */
  removeTeamMembership?: Maybe<Scalars['Boolean']>;
  removeUserBookmarkedCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  removeUserBookmarkedContentContentConnection?: Maybe<Scalars['Boolean']>;
  removeUserHasLocationLocationConnection?: Maybe<Scalars['Boolean']>;
  removeUserHasRoleAppRoleConnection?: Maybe<Scalars['Boolean']>;
  removeUserReportedCommentCommentConnection?: Maybe<Scalars['Boolean']>;
  removeUserReportedContentContentConnection?: Maybe<Scalars['Boolean']>;
  removeUserTaggedWithTagConnection?: Maybe<Scalars['Boolean']>;
  removeVocabularyHasTagTagConnection?: Maybe<Scalars['Boolean']>;
  /**  Update file upload state  */
  setFileUploaded?: Maybe<Scalars['Boolean']>;
  updateApp?: Maybe<App>;
  updateAppRole?: Maybe<AppRole>;
  updateBadge?: Maybe<Badge>;
  updateComment?: Maybe<Comment>;
  updateContent?: Maybe<Content>;
  /**  Update the JSON data field for Content */
  updateContentJSONdata?: Maybe<Scalars['Boolean']>;
  updateFreeSkill?: Maybe<FreeSkill>;
  updateJobRole?: Maybe<JobRole>;
  updateLocation?: Maybe<Location>;
  updateMediaFile?: Maybe<MediaFile>;
  updateMenu?: Maybe<Menu>;
  updateOrganisation?: Maybe<Organisation>;
  /**  Update a users Organisation membership role */
  updateOrganisationMembershipRole?: Maybe<Scalars['Boolean']>;
  /**  Update the Organisation membership type */
  updateOrganisationMembershipType?: Maybe<Scalars['Boolean']>;
  updateOrganisationalSkill?: Maybe<OrganisationalSkill>;
  updatePersonType?: Maybe<PersonType>;
  updatePersonalInterest?: Maybe<PersonalInterest>;
  updateRoleGrade?: Maybe<RoleGrade>;
  updateSchema?: Maybe<Schema>;
  updateSocialProfile?: Maybe<SocialProfile>;
  updateTag?: Maybe<Tag>;
  /**  Update the JSON data field for Tag */
  updateTagJSONdata?: Maybe<Scalars['Boolean']>;
  updateTeam?: Maybe<Team>;
  /**  Update a users Team membership role */
  updateTeamMembershipRole?: Maybe<Scalars['Boolean']>;
  /**  Update the Team membership type */
  updateTeamMembershipType?: Maybe<Scalars['Boolean']>;
  updateUser?: Maybe<User>;
  updateUserTitle?: Maybe<UserTitle>;
  updateVocabulary?: Maybe<Vocabulary>;
};


export type MutationAcceptOrganisationMembershipArgs = {
  id: Scalars['String'];
  membershipId?: InputMaybe<Scalars['String']>;
};


export type MutationAcceptTeamMembershipArgs = {
  id: Scalars['String'];
  membershipId?: InputMaybe<Scalars['String']>;
};


export type MutationAddAppRolePermissionSchemaConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};


export type MutationAddCommentIsReplyToCommentCommentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddCommentIsReplyToContentContentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddCommentLikeArgs = {
  id: Scalars['String'];
};


export type MutationAddContentHasMenuMenuConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationAddContentLikeArgs = {
  id: Scalars['String'];
};


export type MutationAddContentTaggedWithTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationAddOrganisationHasMenuMenuConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationAddOrganisationHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddTeamHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserBookmarkedCommentCommentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserBookmarkedContentContentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserHasLocationLocationConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationAddUserHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserReportedCommentCommentConnectionArgs = {
  body?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserReportedContentContentConnectionArgs = {
  body?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationAddUserTaggedWithTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationAddVocabularyHasTagTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateAppArgs = {
  app_name: Scalars['String'];
  app_url: Scalars['String'];
  appicon?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  id?: InputMaybe<Scalars['String']>;
  machine_name: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  owner: Scalars['String'];
  ownsRole?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  resource_url?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  vocabulary?: InputMaybe<Scalars['String']>;
  wysiwyg_comments?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateAppRoleArgs = {
  belongsToApp: Scalars['String'];
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  givenToOrganisation?: InputMaybe<Scalars['String']>;
  givenToTeam?: InputMaybe<Scalars['String']>;
  givenToUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permission?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateBadgeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCommentArgs = {
  body: Scalars['String'];
  bookmarkedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isReplyToComment?: InputMaybe<Scalars['String']>;
  isReplyToContent?: InputMaybe<Scalars['String']>;
  mentions?: InputMaybe<Scalars['String']>;
  parentContent: Scalars['String'];
  reportedBy?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateContentArgs = {
  activity?: InputMaybe<Scalars['String']>;
  app?: InputMaybe<Scalars['String']>;
  bookmarkedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  hasComment?: InputMaybe<Scalars['String']>;
  hasReply?: InputMaybe<Scalars['String']>;
  hashtag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  mediafile?: InputMaybe<Scalars['String']>;
  mentions?: InputMaybe<Scalars['String']>;
  menu?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  reportedBy?: InputMaybe<Scalars['String']>;
  taggedWith?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateFreeSkillArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateJobRoleArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateLocationArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  organisation: Scalars['String'];
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMediaFileArgs = {
  altText?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isAppIconFor?: InputMaybe<Scalars['String']>;
  isImageFor?: InputMaybe<Scalars['String']>;
  isProfileImageFor?: InputMaybe<Scalars['String']>;
  isTagImageFor?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
  usedAtContent?: InputMaybe<Scalars['String']>;
};


export type MutationCreateMenuArgs = {
  activity?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  contentItem?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOrganisationArgs = {
  app?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  expiry_date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  licences?: InputMaybe<Scalars['Int']>;
  machine_name: Scalars['String'];
  menu?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organisationlocation?: InputMaybe<Scalars['String']>;
  organisationteam?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  users: Scalars['String'];
  vocabulary?: InputMaybe<Scalars['String']>;
};


export type MutationCreateOrganisationalSkillArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePersonTypeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePersonalInterestArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateRoleGradeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateSchemaArgs = {
  app?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  data: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  permissionFromAppRole?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  version: Scalars['String'];
};


export type MutationCreateSocialProfileArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isSocialProfileFor?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTagArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasContent?: InputMaybe<Scalars['String']>;
  hashtagInContent?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  parentVocabulary: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
  usedByUser?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateTeamArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  organisation: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserArgs = {
  about_me?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<Scalars['String']>;
  bookmarkedComment?: InputMaybe<Scalars['String']>;
  bookmarkedContent?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  desk_phone?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  external_id?: InputMaybe<Scalars['String']>;
  follows?: InputMaybe<Scalars['String']>;
  forename?: InputMaybe<Scalars['String']>;
  freeskill?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  job_title?: InputMaybe<Scalars['String']>;
  jobrole?: InputMaybe<Scalars['String']>;
  known_as?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  memberOf?: InputMaybe<Scalars['String']>;
  mentionedByComments?: InputMaybe<Scalars['String']>;
  mentionedByContents?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['String']>;
  organisationalskill?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  personalinterest?: InputMaybe<Scalars['String']>;
  persontype?: InputMaybe<Scalars['String']>;
  profileimage?: InputMaybe<Scalars['String']>;
  read_only?: InputMaybe<Scalars['Boolean']>;
  redacted?: InputMaybe<Scalars['Boolean']>;
  reportedComment?: InputMaybe<Scalars['String']>;
  reportedContent?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  rolegrade?: InputMaybe<Scalars['String']>;
  socialprofile?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  taggedWith?: InputMaybe<Scalars['String']>;
  time_zone?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  usertitle?: InputMaybe<Scalars['String']>;
};


export type MutationCreateUserTitleArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationCreateVocabularyArgs = {
  app?: InputMaybe<Scalars['String']>;
  cardinality: Scalars['String'];
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  machine_name: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteAppArgs = {
  id: Scalars['String'];
};


export type MutationDeleteAppRoleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBadgeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteContentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteFreeSkillArgs = {
  id: Scalars['String'];
};


export type MutationDeleteJobRoleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaFileArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOrganisationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOrganisationalSkillArgs = {
  id: Scalars['String'];
};


export type MutationDeletePersonTypeArgs = {
  id: Scalars['String'];
};


export type MutationDeletePersonalInterestArgs = {
  id: Scalars['String'];
};


export type MutationDeleteRoleGradeArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSchemaArgs = {
  id: Scalars['String'];
};


export type MutationDeleteSocialProfileArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTeamArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserTitleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteVocabularyArgs = {
  id: Scalars['String'];
};


export type MutationDisableCommentBehaviourArgs = {
  behaviour: Scalars['String'];
};


export type MutationDisableContentBehaviourArgs = {
  behaviour: Scalars['String'];
};


export type MutationEnableCommentBehaviourArgs = {
  behaviour: Scalars['String'];
  config?: InputMaybe<Scalars['String']>;
};


export type MutationEnableContentBehaviourArgs = {
  behaviour: Scalars['String'];
  config?: InputMaybe<Scalars['String']>;
};


export type MutationInviteToOrganisationMembershipByEmailArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
  role?: InputMaybe<OrganisationMembershipTypeRole>;
  type?: InputMaybe<OrganisationInviteType>;
};


export type MutationInviteToOrganisationMembershipByIdArgs = {
  id: Scalars['String'];
  invitee: Scalars['String'];
  role?: InputMaybe<OrganisationMembershipTypeRole>;
  type?: InputMaybe<OrganisationInviteType>;
};


export type MutationInviteToTeamMembershipByEmailArgs = {
  email: Scalars['String'];
  id: Scalars['String'];
  role?: InputMaybe<TeamMembershipTypeRole>;
  type?: InputMaybe<TeamInviteType>;
};


export type MutationInviteToTeamMembershipByIdArgs = {
  id: Scalars['String'];
  invitee: Scalars['String'];
  role?: InputMaybe<TeamMembershipTypeRole>;
  type?: InputMaybe<TeamInviteType>;
};


export type MutationLeaveOrganisationMembershipArgs = {
  id: Scalars['String'];
};


export type MutationLeaveTeamMembershipArgs = {
  id: Scalars['String'];
};


export type MutationRejectOrganisationMembershipArgs = {
  id: Scalars['String'];
};


export type MutationRejectTeamMembershipArgs = {
  id: Scalars['String'];
};


export type MutationRemoveAppRolePermissionSchemaConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveCommentIsReplyToCommentCommentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveCommentIsReplyToContentContentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveCommentLikeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveContentHasMenuMenuConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveContentLikeArgs = {
  id: Scalars['String'];
};


export type MutationRemoveContentTaggedWithTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveOrganisationHasMenuMenuConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveOrganisationHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveOrganisationMembershipArgs = {
  id: Scalars['String'];
  user: Scalars['String'];
};


export type MutationRemoveTeamHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveTeamMembershipArgs = {
  id: Scalars['String'];
  user: Scalars['String'];
};


export type MutationRemoveUserBookmarkedCommentCommentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserBookmarkedContentContentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserHasLocationLocationConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserHasRoleAppRoleConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserReportedCommentCommentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserReportedContentContentConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveUserTaggedWithTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationRemoveVocabularyHasTagTagConnectionArgs = {
  destination: Scalars['String'];
  source: Scalars['String'];
};


export type MutationSetFileUploadedArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAppArgs = {
  app_name?: InputMaybe<Scalars['String']>;
  app_url?: InputMaybe<Scalars['String']>;
  appicon?: InputMaybe<Scalars['String']>;
  comments?: InputMaybe<Scalars['Boolean']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  machine_name?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  ownsRole?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  resource_url?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  vocabulary?: InputMaybe<Scalars['String']>;
  wysiwyg_comments?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateAppRoleArgs = {
  belongsToApp?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  givenToOrganisation?: InputMaybe<Scalars['String']>;
  givenToTeam?: InputMaybe<Scalars['String']>;
  givenToUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  permission?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateBadgeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCommentArgs = {
  body?: InputMaybe<Scalars['String']>;
  bookmarkedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isReplyToComment?: InputMaybe<Scalars['String']>;
  isReplyToContent?: InputMaybe<Scalars['String']>;
  mentions?: InputMaybe<Scalars['String']>;
  parentContent?: InputMaybe<Scalars['String']>;
  reportedBy?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateContentArgs = {
  activity?: InputMaybe<Scalars['String']>;
  app?: InputMaybe<Scalars['String']>;
  bookmarkedBy?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  hasComment?: InputMaybe<Scalars['String']>;
  hasReply?: InputMaybe<Scalars['String']>;
  hashtag?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  mediafile?: InputMaybe<Scalars['String']>;
  mentions?: InputMaybe<Scalars['String']>;
  menu?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  reportedBy?: InputMaybe<Scalars['String']>;
  taggedWith?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateContentJsoNdataArgs = {
  data?: InputMaybe<Scalars['JSON']>;
  id: Scalars['String'];
};


export type MutationUpdateFreeSkillArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateJobRoleArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateLocationArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMediaFileArgs = {
  altText?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isAppIconFor?: InputMaybe<Scalars['String']>;
  isImageFor?: InputMaybe<Scalars['String']>;
  isProfileImageFor?: InputMaybe<Scalars['String']>;
  isTagImageFor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  usedAtContent?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateMenuArgs = {
  activity?: InputMaybe<Scalars['String']>;
  body?: InputMaybe<Scalars['String']>;
  contentItem?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  display?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOrganisationArgs = {
  app?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  expiry_date?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  licences?: InputMaybe<Scalars['Int']>;
  machine_name?: InputMaybe<Scalars['String']>;
  menu?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organisationlocation?: InputMaybe<Scalars['String']>;
  organisationteam?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Scalars['String']>;
  vocabulary?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateOrganisationMembershipRoleArgs = {
  id: Scalars['String'];
  role: OrganisationMembershipTypeRole;
  userId: Scalars['String'];
};


export type MutationUpdateOrganisationMembershipTypeArgs = {
  id: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateOrganisationalSkillArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePersonTypeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePersonalInterestArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRoleGradeArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSchemaArgs = {
  app?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  permissionFromAppRole?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateSocialProfileArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isSocialProfileFor?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTagArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasContent?: InputMaybe<Scalars['String']>;
  hashtagInContent?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  parentVocabulary?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  usedByUser?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Int']>;
};


export type MutationUpdateTagJsoNdataArgs = {
  data?: InputMaybe<Scalars['JSON']>;
  id: Scalars['String'];
};


export type MutationUpdateTeamArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  organisation?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTeamMembershipRoleArgs = {
  id: Scalars['String'];
  role: TeamMembershipTypeRole;
  userId: Scalars['String'];
};


export type MutationUpdateTeamMembershipTypeArgs = {
  id: Scalars['String'];
  type: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  about_me?: InputMaybe<Scalars['String']>;
  badge?: InputMaybe<Scalars['String']>;
  bookmarkedComment?: InputMaybe<Scalars['String']>;
  bookmarkedContent?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  date_of_birth?: InputMaybe<Scalars['String']>;
  desk_phone?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  external_id?: InputMaybe<Scalars['String']>;
  follows?: InputMaybe<Scalars['String']>;
  forename?: InputMaybe<Scalars['String']>;
  freeskill?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  job_title?: InputMaybe<Scalars['String']>;
  jobrole?: InputMaybe<Scalars['String']>;
  known_as?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['String']>;
  memberOf?: InputMaybe<Scalars['String']>;
  mentionedByComments?: InputMaybe<Scalars['String']>;
  mentionedByContents?: InputMaybe<Scalars['String']>;
  middle_name?: InputMaybe<Scalars['String']>;
  mobile_phone?: InputMaybe<Scalars['String']>;
  organisationalskill?: InputMaybe<Scalars['String']>;
  ownsSchema?: InputMaybe<Scalars['String']>;
  personalinterest?: InputMaybe<Scalars['String']>;
  persontype?: InputMaybe<Scalars['String']>;
  profileimage?: InputMaybe<Scalars['String']>;
  read_only?: InputMaybe<Scalars['Boolean']>;
  redacted?: InputMaybe<Scalars['Boolean']>;
  reportedComment?: InputMaybe<Scalars['String']>;
  reportedContent?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  rolegrade?: InputMaybe<Scalars['String']>;
  socialprofile?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  surname?: InputMaybe<Scalars['String']>;
  taggedWith?: InputMaybe<Scalars['String']>;
  time_zone?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  usertitle?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateUserTitleArgs = {
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  hasUser?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateVocabularyArgs = {
  app?: InputMaybe<Scalars['String']>;
  cardinality?: InputMaybe<Scalars['String']>;
  created?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  machine_name?: InputMaybe<Scalars['String']>;
  organisation?: InputMaybe<Scalars['String']>;
  tag?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated?: InputMaybe<Scalars['String']>;
};

export type Organisation = {
  __typename?: 'Organisation';
  appConnection?: Maybe<OrganisationHasAppConnection>;
  contentConnection?: Maybe<OrganisationHasContentConnection>;
  created?: Maybe<Scalars['String']>;
  currentUserMembership?: Maybe<OrganisationMembershipInfo>;
  expiry_date?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  licences?: Maybe<Scalars['Int']>;
  machine_name: Scalars['String'];
  membersConnection?: Maybe<OrganisationMemberConnection>;
  membershipType?: Maybe<Scalars['String']>;
  menuConnection?: Maybe<OrganisationHasMenuConnection>;
  name: Scalars['String'];
  organisationlocationConnection?: Maybe<OrganisationHasOrganisationLocationConnection>;
  organisationteamConnection?: Maybe<OrganisationHasOrganisationTeamConnection>;
  ownsSchemaConnection?: Maybe<OrganisationOwnsSchemaConnection>;
  personal?: Maybe<Scalars['Boolean']>;
  roleConnection?: Maybe<OrganisationHasRoleConnection>;
  updated?: Maybe<Scalars['String']>;
  usersConnection?: Maybe<OrganisationUsersConnection>;
  vocabularyConnection?: Maybe<OrganisationHasVocabularyConnection>;
};


export type OrganisationAppConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationMenuConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationOrganisationlocationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationOrganisationteamConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationOwnsSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type OrganisationVocabularyConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type OrganisationConnection = {
  __typename?: 'OrganisationConnection';
  edges: Array<OrganisationEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationEdge = {
  __typename?: 'OrganisationEdge';
  cursor: Scalars['String'];
  node: Organisation;
};

export type OrganisationHasAppConnection = {
  __typename?: 'OrganisationHasAppConnection';
  edges: Array<OrganisationHasAppEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasAppEdge = {
  __typename?: 'OrganisationHasAppEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: App;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationHasContentConnection = {
  __typename?: 'OrganisationHasContentConnection';
  edges: Array<OrganisationHasContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasContentEdge = {
  __typename?: 'OrganisationHasContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationHasMenuConnection = {
  __typename?: 'OrganisationHasMenuConnection';
  edges: Array<OrganisationHasMenuEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasMenuEdge = {
  __typename?: 'OrganisationHasMenuEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Menu;
  updated?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['Int']>;
};

export type OrganisationHasOrganisationLocationConnection = {
  __typename?: 'OrganisationHasOrganisationLocationConnection';
  edges: Array<OrganisationHasOrganisationLocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasOrganisationLocationEdge = {
  __typename?: 'OrganisationHasOrganisationLocationEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Location;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationHasOrganisationTeamConnection = {
  __typename?: 'OrganisationHasOrganisationTeamConnection';
  edges: Array<OrganisationHasOrganisationTeamEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasOrganisationTeamEdge = {
  __typename?: 'OrganisationHasOrganisationTeamEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Team;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationHasRoleConnection = {
  __typename?: 'OrganisationHasRoleConnection';
  edges: Array<OrganisationHasRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasRoleEdge = {
  __typename?: 'OrganisationHasRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: AppRole;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationHasVocabularyConnection = {
  __typename?: 'OrganisationHasVocabularyConnection';
  edges: Array<OrganisationHasVocabularyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationHasVocabularyEdge = {
  __typename?: 'OrganisationHasVocabularyEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Vocabulary;
  updated?: Maybe<Scalars['String']>;
};

export enum OrganisationInviteType {
  User = 'User'
}

export type OrganisationMemberConnection = {
  __typename?: 'OrganisationMemberConnection';
  edges: Array<OrganisationMemberEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationMemberEdge = {
  __typename?: 'OrganisationMemberEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: OrganisationMemberships;
  role?: Maybe<OrganisationMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationMembershipInfo = {
  __typename?: 'OrganisationMembershipInfo';
  created?: Maybe<Scalars['String']>;
  role?: Maybe<OrganisationMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export enum OrganisationMembershipTypeRole {
  Editor = 'editor',
  Manager = 'manager',
  Viewer = 'viewer'
}

export type OrganisationMemberships = User;

export type OrganisationOwnsSchemaConnection = {
  __typename?: 'OrganisationOwnsSchemaConnection';
  edges: Array<OrganisationOwnsSchemaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationOwnsSchemaEdge = {
  __typename?: 'OrganisationOwnsSchemaEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Schema;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationUsersConnection = {
  __typename?: 'OrganisationUsersConnection';
  edges: Array<OrganisationUsersEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationUsersEdge = {
  __typename?: 'OrganisationUsersEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  role?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type OrganisationalSkill = {
  __typename?: 'OrganisationalSkill';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<OrganisationalSkillUserConnection>;
};


export type OrganisationalSkillUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type OrganisationalSkillConnection = {
  __typename?: 'OrganisationalSkillConnection';
  edges: Array<OrganisationalSkillEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type OrganisationalSkillEdge = {
  __typename?: 'OrganisationalSkillEdge';
  cursor: Scalars['String'];
  node: OrganisationalSkill;
};

export type OrganisationalSkillUserConnection = {
  __typename?: 'OrganisationalSkillUserConnection';
  edges: Array<OrganisationalSkillUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type OrganisationalSkillUserEdge = {
  __typename?: 'OrganisationalSkillUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  lastCursor: Scalars['String'];
};

export enum ParentType {
  App = 'App',
  Content = 'Content',
  Menu = 'Menu',
  Organisation = 'Organisation',
  User = 'User',
  Vocabulary = 'Vocabulary'
}

export type PersonType = {
  __typename?: 'PersonType';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<PersonTypeUserConnection>;
};


export type PersonTypeUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type PersonTypeConnection = {
  __typename?: 'PersonTypeConnection';
  edges: Array<PersonTypeEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PersonTypeEdge = {
  __typename?: 'PersonTypeEdge';
  cursor: Scalars['String'];
  node: PersonType;
};

export type PersonTypeUserConnection = {
  __typename?: 'PersonTypeUserConnection';
  edges: Array<PersonTypeUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonTypeUserEdge = {
  __typename?: 'PersonTypeUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type PersonalInterest = {
  __typename?: 'PersonalInterest';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<PersonalInterestUserConnection>;
};


export type PersonalInterestUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type PersonalInterestConnection = {
  __typename?: 'PersonalInterestConnection';
  edges: Array<PersonalInterestEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PersonalInterestEdge = {
  __typename?: 'PersonalInterestEdge';
  cursor: Scalars['String'];
  node: PersonalInterest;
};

export type PersonalInterestUserConnection = {
  __typename?: 'PersonalInterestUserConnection';
  edges: Array<PersonalInterestUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PersonalInterestUserEdge = {
  __typename?: 'PersonalInterestUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Activities?: Maybe<ActivityConnection>;
  Activity?: Maybe<Activity>;
  App?: Maybe<App>;
  AppRole?: Maybe<AppRole>;
  AppRoles?: Maybe<AppRoleConnection>;
  Apps?: Maybe<AppConnection>;
  Badge?: Maybe<Badge>;
  Badges?: Maybe<BadgeConnection>;
  Comment?: Maybe<Comment>;
  /**  Lists Comment behaviours  */
  CommentBehaviours: Array<CommentBehaviourInstance>;
  Comments?: Maybe<CommentConnection>;
  Content?: Maybe<Content>;
  /**  Lists Content behaviours  */
  ContentBehaviours: Array<ContentBehaviourInstance>;
  Contents?: Maybe<ContentConnection>;
  FreeSkill?: Maybe<FreeSkill>;
  FreeSkills?: Maybe<FreeSkillConnection>;
  JobRole?: Maybe<JobRole>;
  JobRoles?: Maybe<JobRoleConnection>;
  Location?: Maybe<Location>;
  Locations?: Maybe<LocationConnection>;
  MediaFile?: Maybe<MediaFile>;
  MediaFileStatus?: Maybe<Scalars['Boolean']>;
  MediaFiles?: Maybe<MediaFileConnection>;
  Menu?: Maybe<Menu>;
  Menus?: Maybe<MenuConnection>;
  Organisation?: Maybe<Organisation>;
  OrganisationalSkill?: Maybe<OrganisationalSkill>;
  OrganisationalSkills?: Maybe<OrganisationalSkillConnection>;
  Organisations?: Maybe<OrganisationConnection>;
  PersonType?: Maybe<PersonType>;
  PersonTypes?: Maybe<PersonTypeConnection>;
  PersonalInterest?: Maybe<PersonalInterest>;
  PersonalInterests?: Maybe<PersonalInterestConnection>;
  RoleGrade?: Maybe<RoleGrade>;
  RoleGrades?: Maybe<RoleGradeConnection>;
  Schema?: Maybe<Schema>;
  Schemata?: Maybe<SchemaConnection>;
  SocialProfile?: Maybe<SocialProfile>;
  SocialProfiles?: Maybe<SocialProfileConnection>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<TagConnection>;
  Team?: Maybe<Team>;
  Teams?: Maybe<TeamConnection>;
  User?: Maybe<User>;
  UserTitle?: Maybe<UserTitle>;
  UserTitles?: Maybe<UserTitleConnection>;
  Users?: Maybe<UserConnection>;
  Vocabularies?: Maybe<VocabularyConnection>;
  Vocabulary?: Maybe<Vocabulary>;
  listOrganisationMembershipInvites?: Maybe<InvitationConnection>;
  listTeamMembershipInvites?: Maybe<InvitationConnection>;
};


export type QueryActivitiesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryActivityArgs = {
  id: Scalars['String'];
};


export type QueryAppArgs = {
  id: Scalars['String'];
};


export type QueryAppRoleArgs = {
  id: Scalars['String'];
};


export type QueryAppRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryBadgeArgs = {
  id: Scalars['String'];
};


export type QueryBadgesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryContentArgs = {
  id: Scalars['String'];
};


export type QueryContentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryFreeSkillArgs = {
  id: Scalars['String'];
};


export type QueryFreeSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryJobRoleArgs = {
  id: Scalars['String'];
};


export type QueryJobRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryLocationArgs = {
  id: Scalars['String'];
};


export type QueryLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryMediaFileArgs = {
  id: Scalars['String'];
};


export type QueryMediaFileStatusArgs = {
  action: ActionType;
  id: Scalars['String'];
};


export type QueryMediaFilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  id: Scalars['String'];
};


export type QueryMenusArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryOrganisationArgs = {
  id: Scalars['String'];
};


export type QueryOrganisationalSkillArgs = {
  id: Scalars['String'];
};


export type QueryOrganisationalSkillsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryOrganisationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryPersonTypeArgs = {
  id: Scalars['String'];
};


export type QueryPersonTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryPersonalInterestArgs = {
  id: Scalars['String'];
};


export type QueryPersonalInterestsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryRoleGradeArgs = {
  id: Scalars['String'];
};


export type QueryRoleGradesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QuerySchemaArgs = {
  id: Scalars['String'];
};


export type QuerySchemataArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QuerySocialProfileArgs = {
  id: Scalars['String'];
};


export type QuerySocialProfilesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryTagArgs = {
  id: Scalars['String'];
};


export type QueryTagsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryTeamArgs = {
  id: Scalars['String'];
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserTitleArgs = {
  id: Scalars['String'];
};


export type QueryUserTitlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryVocabulariesArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryVocabularyArgs = {
  id: Scalars['String'];
};


export type QueryListOrganisationMembershipInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type QueryListTeamMembershipInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type RoleGrade = {
  __typename?: 'RoleGrade';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<RoleGradeUserConnection>;
};


export type RoleGradeUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type RoleGradeConnection = {
  __typename?: 'RoleGradeConnection';
  edges: Array<RoleGradeEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type RoleGradeEdge = {
  __typename?: 'RoleGradeEdge';
  cursor: Scalars['String'];
  node: RoleGrade;
};

export type RoleGradeUserConnection = {
  __typename?: 'RoleGradeUserConnection';
  edges: Array<RoleGradeUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type RoleGradeUserEdge = {
  __typename?: 'RoleGradeUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Schema = {
  __typename?: 'Schema';
  app?: Maybe<App>;
  created?: Maybe<Scalars['String']>;
  data: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  organisation?: Maybe<Organisation>;
  permissionFromAppRoleConnection?: Maybe<SchemaPermissionFromAppRoleConnection>;
  updated?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  version: Scalars['String'];
};


export type SchemaPermissionFromAppRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type SchemaConnection = {
  __typename?: 'SchemaConnection';
  edges: Array<SchemaEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SchemaEdge = {
  __typename?: 'SchemaEdge';
  cursor: Scalars['String'];
  node: Schema;
};

export type SchemaPermissionFromAppRoleConnection = {
  __typename?: 'SchemaPermissionFromAppRoleConnection';
  edges: Array<SchemaPermissionFromAppRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SchemaPermissionFromAppRoleEdge = {
  __typename?: 'SchemaPermissionFromAppRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: AppRole;
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

export type SocialProfile = {
  __typename?: 'SocialProfile';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isSocialProfileForConnection?: Maybe<SocialProfileIsSocialProfileForConnection>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};


export type SocialProfileIsSocialProfileForConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type SocialProfileConnection = {
  __typename?: 'SocialProfileConnection';
  edges: Array<SocialProfileEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type SocialProfileEdge = {
  __typename?: 'SocialProfileEdge';
  cursor: Scalars['String'];
  node: SocialProfile;
};

export type SocialProfileIsSocialProfileForConnection = {
  __typename?: 'SocialProfileIsSocialProfileForConnection';
  edges: Array<SocialProfileIsSocialProfileForEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SocialProfileIsSocialProfileForEdge = {
  __typename?: 'SocialProfileIsSocialProfileForEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  author?: Maybe<User>;
  contentConnection?: Maybe<TagContentConnection>;
  created?: Maybe<Scalars['String']>;
  data?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  htagincontentConnection?: Maybe<TagHtagincontentConnection>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<MediaFile>;
  parentVocabulary?: Maybe<Vocabulary>;
  schema: Schema;
  title: Scalars['String'];
  type: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  usedByUserConnection?: Maybe<TagUsedByUserConnection>;
  weight?: Maybe<Scalars['Int']>;
};


export type TagContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type TagDataArgs = {
  filter?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type TagHtagincontentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type TagUsedByUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type TagConnection = {
  __typename?: 'TagConnection';
  edges: Array<TagEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TagContentConnection = {
  __typename?: 'TagContentConnection';
  edges: Array<TagContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagContentEdge = {
  __typename?: 'TagContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type TagEdge = {
  __typename?: 'TagEdge';
  cursor: Scalars['String'];
  node: Tag;
};

export type TagHtagincontentConnection = {
  __typename?: 'TagHtagincontentConnection';
  edges: Array<TagHtagincontentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagHtagincontentEdge = {
  __typename?: 'TagHtagincontentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type TagUsedByUserConnection = {
  __typename?: 'TagUsedByUserConnection';
  edges: Array<TagUsedByUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TagUsedByUserEdge = {
  __typename?: 'TagUsedByUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  author?: Maybe<User>;
  created?: Maybe<Scalars['String']>;
  currentUserMembership?: Maybe<TeamMembershipInfo>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  membersConnection?: Maybe<TeamMemberConnection>;
  membershipType?: Maybe<Scalars['String']>;
  organisation?: Maybe<Organisation>;
  roleConnection?: Maybe<TeamHasRoleConnection>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<TeamUserConnection>;
};


export type TeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type TeamRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type TeamUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type TeamConnection = {
  __typename?: 'TeamConnection';
  edges: Array<TeamEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TeamEdge = {
  __typename?: 'TeamEdge';
  cursor: Scalars['String'];
  node: Team;
};

export type TeamHasRoleConnection = {
  __typename?: 'TeamHasRoleConnection';
  edges: Array<TeamHasRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamHasRoleEdge = {
  __typename?: 'TeamHasRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: AppRole;
  updated?: Maybe<Scalars['String']>;
};

export enum TeamInviteType {
  User = 'User'
}

export type TeamMemberConnection = {
  __typename?: 'TeamMemberConnection';
  edges: Array<TeamMemberEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TeamMemberEdge = {
  __typename?: 'TeamMemberEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: TeamMemberships;
  role?: Maybe<TeamMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export type TeamMembershipInfo = {
  __typename?: 'TeamMembershipInfo';
  created?: Maybe<Scalars['String']>;
  role?: Maybe<TeamMembershipTypeRole>;
  updated?: Maybe<Scalars['String']>;
};

export enum TeamMembershipTypeRole {
  Editor = 'editor',
  Manager = 'manager',
  Viewer = 'viewer'
}

export type TeamMemberships = User;

export type TeamUserConnection = {
  __typename?: 'TeamUserConnection';
  edges: Array<TeamUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TeamUserEdge = {
  __typename?: 'TeamUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  role?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  about_me?: Maybe<Scalars['String']>;
  authorOfCommentConnection?: Maybe<CommentConnection>;
  authorOfContentConnection?: Maybe<ContentConnection>;
  badgeConnection?: Maybe<UserHasBadgeConnection>;
  bookmarkedCommentConnection?: Maybe<UserBookmarkedCommentConnection>;
  bookmarkedContentConnection?: Maybe<UserBookmarkedContentConnection>;
  created?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['String']>;
  desk_phone?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  external_id?: Maybe<Scalars['String']>;
  followedByConnection?: Maybe<UserFollowedByConnection>;
  followsContentConnection?: Maybe<UserFollowsContentConnection>;
  followsUserConnection?: Maybe<UserFollowsUserConnection>;
  forename?: Maybe<Scalars['String']>;
  freeskillConnection?: Maybe<UserHasFreeSkillConnection>;
  id?: Maybe<Scalars['String']>;
  job_title?: Maybe<Scalars['String']>;
  jobroleConnection?: Maybe<UserHasJobRoleConnection>;
  known_as?: Maybe<Scalars['String']>;
  locationConnection?: Maybe<UserHasLocationConnection>;
  manager?: Maybe<User>;
  managerOfConnection?: Maybe<UserManagerOfConnection>;
  memberOfOrganisationConnection?: Maybe<UserMemberOfOrganisationConnection>;
  memberOfTeamConnection?: Maybe<UserMemberOfTeamConnection>;
  mentionedByCommentsConnection?: Maybe<UserMentionedByCommentsConnection>;
  mentionedByContentsConnection?: Maybe<UserMentionedByContentsConnection>;
  middle_name?: Maybe<Scalars['String']>;
  mobile_phone?: Maybe<Scalars['String']>;
  organisationalskillConnection?: Maybe<UserHasOrganisationalSkillConnection>;
  ownsSchemaConnection?: Maybe<UserOwnsSchemaConnection>;
  personalinterestConnection?: Maybe<UserHasPersonalInterestConnection>;
  persontypeConnection?: Maybe<UserHasPersonTypeConnection>;
  profileimage?: Maybe<MediaFile>;
  read_only?: Maybe<Scalars['Boolean']>;
  redacted?: Maybe<Scalars['Boolean']>;
  reportedCommentConnection?: Maybe<UserReportedCommentConnection>;
  reportedContentConnection?: Maybe<UserReportedContentConnection>;
  roleConnection?: Maybe<UserHasRoleConnection>;
  rolegradeConnection?: Maybe<UserHasRoleGradeConnection>;
  schema?: Maybe<Schema>;
  socialprofileConnection?: Maybe<UserHasSocialProfileConnection>;
  status?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  taggedWithConnection?: Maybe<UserTaggedWithConnection>;
  time_zone?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  usertitleConnection?: Maybe<UserHasUserTitleConnection>;
};


export type UserAuthorOfCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserAuthorOfContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserBadgeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserBookmarkedCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserBookmarkedContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserFollowedByConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserFollowsContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserFollowsUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserFreeskillConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserJobroleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserLocationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserManagerOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserMemberOfOrganisationConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserMemberOfTeamConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserMentionedByCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserMentionedByContentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserOrganisationalskillConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserOwnsSchemaConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserPersonalinterestConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserPersontypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserReportedCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserReportedContentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserRoleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserRolegradeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserSocialprofileConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserTaggedWithConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};


export type UserUsertitleConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type UserBookmarkedCommentConnection = {
  __typename?: 'UserBookmarkedCommentConnection';
  edges: Array<UserBookmarkedCommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserBookmarkedCommentEdge = {
  __typename?: 'UserBookmarkedCommentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type UserBookmarkedContentConnection = {
  __typename?: 'UserBookmarkedContentConnection';
  edges: Array<UserBookmarkedContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserBookmarkedContentEdge = {
  __typename?: 'UserBookmarkedContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserFollowedByConnection = {
  __typename?: 'UserFollowedByConnection';
  edges: Array<UserFollowedByEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFollowedByEdge = {
  __typename?: 'UserFollowedByEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type UserFollowsContentConnection = {
  __typename?: 'UserFollowsContentConnection';
  edges: Array<UserFollowsContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFollowsContentEdge = {
  __typename?: 'UserFollowsContentEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type UserFollowsUserConnection = {
  __typename?: 'UserFollowsUserConnection';
  edges: Array<UserFollowsUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFollowsUserEdge = {
  __typename?: 'UserFollowsUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasBadgeConnection = {
  __typename?: 'UserHasBadgeConnection';
  edges: Array<UserHasBadgeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasBadgeEdge = {
  __typename?: 'UserHasBadgeEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Badge;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasFreeSkillConnection = {
  __typename?: 'UserHasFreeSkillConnection';
  edges: Array<UserHasFreeSkillEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasFreeSkillEdge = {
  __typename?: 'UserHasFreeSkillEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: FreeSkill;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasJobRoleConnection = {
  __typename?: 'UserHasJobRoleConnection';
  edges: Array<UserHasJobRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasJobRoleEdge = {
  __typename?: 'UserHasJobRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: JobRole;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasLocationConnection = {
  __typename?: 'UserHasLocationConnection';
  edges: Array<UserHasLocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasLocationEdge = {
  __typename?: 'UserHasLocationEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Location;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type UserHasOrganisationalSkillConnection = {
  __typename?: 'UserHasOrganisationalSkillConnection';
  edges: Array<UserHasOrganisationalSkillEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasOrganisationalSkillEdge = {
  __typename?: 'UserHasOrganisationalSkillEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: OrganisationalSkill;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasPersonTypeConnection = {
  __typename?: 'UserHasPersonTypeConnection';
  edges: Array<UserHasPersonTypeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasPersonTypeEdge = {
  __typename?: 'UserHasPersonTypeEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: PersonType;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasPersonalInterestConnection = {
  __typename?: 'UserHasPersonalInterestConnection';
  edges: Array<UserHasPersonalInterestEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasPersonalInterestEdge = {
  __typename?: 'UserHasPersonalInterestEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: PersonalInterest;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasRoleConnection = {
  __typename?: 'UserHasRoleConnection';
  edges: Array<UserHasRoleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasRoleEdge = {
  __typename?: 'UserHasRoleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: AppRole;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasRoleGradeConnection = {
  __typename?: 'UserHasRoleGradeConnection';
  edges: Array<UserHasRoleGradeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasRoleGradeEdge = {
  __typename?: 'UserHasRoleGradeEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: RoleGrade;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasSocialProfileConnection = {
  __typename?: 'UserHasSocialProfileConnection';
  edges: Array<UserHasSocialProfileEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasSocialProfileEdge = {
  __typename?: 'UserHasSocialProfileEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: SocialProfile;
  updated?: Maybe<Scalars['String']>;
};

export type UserHasUserTitleConnection = {
  __typename?: 'UserHasUserTitleConnection';
  edges: Array<UserHasUserTitleEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserHasUserTitleEdge = {
  __typename?: 'UserHasUserTitleEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: UserTitle;
  updated?: Maybe<Scalars['String']>;
};

export type UserManagerOfConnection = {
  __typename?: 'UserManagerOfConnection';
  edges: Array<UserManagerOfEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserManagerOfEdge = {
  __typename?: 'UserManagerOfEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type UserMemberOfOrganisationConnection = {
  __typename?: 'UserMemberOfOrganisationConnection';
  edges: Array<UserMemberOfOrganisationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserMemberOfOrganisationEdge = {
  __typename?: 'UserMemberOfOrganisationEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Organisation;
  role?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type UserMemberOfTeamConnection = {
  __typename?: 'UserMemberOfTeamConnection';
  edges: Array<UserMemberOfTeamEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserMemberOfTeamEdge = {
  __typename?: 'UserMemberOfTeamEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Team;
  role?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};

export type UserMentionedByCommentsConnection = {
  __typename?: 'UserMentionedByCommentsConnection';
  edges: Array<UserMentionedByCommentsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserMentionedByCommentsEdge = {
  __typename?: 'UserMentionedByCommentsEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type UserMentionedByContentsConnection = {
  __typename?: 'UserMentionedByContentsConnection';
  edges: Array<UserMentionedByContentsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserMentionedByContentsEdge = {
  __typename?: 'UserMentionedByContentsEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type UserOwnsSchemaConnection = {
  __typename?: 'UserOwnsSchemaConnection';
  edges: Array<UserOwnsSchemaEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserOwnsSchemaEdge = {
  __typename?: 'UserOwnsSchemaEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Schema;
  updated?: Maybe<Scalars['String']>;
};

export type UserReportedCommentConnection = {
  __typename?: 'UserReportedCommentConnection';
  edges: Array<UserReportedCommentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserReportedCommentEdge = {
  __typename?: 'UserReportedCommentEdge';
  body?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Comment;
  updated?: Maybe<Scalars['String']>;
};

export type UserReportedContentConnection = {
  __typename?: 'UserReportedContentConnection';
  edges: Array<UserReportedContentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserReportedContentEdge = {
  __typename?: 'UserReportedContentEdge';
  body?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Content;
  updated?: Maybe<Scalars['String']>;
};

export type UserTaggedWithConnection = {
  __typename?: 'UserTaggedWithConnection';
  edges: Array<UserTaggedWithEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserTaggedWithEdge = {
  __typename?: 'UserTaggedWithEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Tag;
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type UserTitle = {
  __typename?: 'UserTitle';
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
  userConnection?: Maybe<UserTitleUserConnection>;
};


export type UserTitleUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type UserTitleConnection = {
  __typename?: 'UserTitleConnection';
  edges: Array<UserTitleEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UserTitleEdge = {
  __typename?: 'UserTitleEdge';
  cursor: Scalars['String'];
  node: UserTitle;
};

export type UserTitleUserConnection = {
  __typename?: 'UserTitleUserConnection';
  edges: Array<UserTitleUserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserTitleUserEdge = {
  __typename?: 'UserTitleUserEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: User;
  updated?: Maybe<Scalars['String']>;
};

export type Vocabulary = {
  __typename?: 'Vocabulary';
  app?: Maybe<App>;
  author?: Maybe<User>;
  cardinality: Scalars['String'];
  created?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  machine_name: Scalars['String'];
  organisation?: Maybe<Organisation>;
  tagConnection?: Maybe<VocabularyHasTagConnection>;
  title: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  updated?: Maybe<Scalars['String']>;
};


export type VocabularyTagConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  edgeFilter?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  filterOrder?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
};

export type VocabularyConnection = {
  __typename?: 'VocabularyConnection';
  edges: Array<VocabularyEdge>;
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export type VocabularyEdge = {
  __typename?: 'VocabularyEdge';
  cursor: Scalars['String'];
  node: Vocabulary;
};

export type VocabularyHasTagConnection = {
  __typename?: 'VocabularyHasTagConnection';
  edges: Array<VocabularyHasTagEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type VocabularyHasTagEdge = {
  __typename?: 'VocabularyHasTagEdge';
  created?: Maybe<Scalars['String']>;
  cursor: Scalars['String'];
  node: Tag;
  updated?: Maybe<Scalars['String']>;
  weight: Scalars['Int'];
};

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', User?: { __typename?: 'User', id?: string | null, username?: string | null, profileimage?: { __typename?: 'MediaFile', downloadUrl?: string | null } | null, memberOfOrganisationConnection?: { __typename?: 'UserMemberOfOrganisationConnection', edges: Array<{ __typename?: 'UserMemberOfOrganisationEdge', node: { __typename?: 'Organisation', id?: string | null, appConnection?: { __typename?: 'OrganisationHasAppConnection', edges: Array<{ __typename?: 'OrganisationHasAppEdge', node: { __typename?: 'App', id?: string | null, machine_name: string } }> } | null } }> } | null } | null };


export const GetUserDocument = gql`
    query GetUser($id: String!) {
  User(id: $id) {
    id
    username
    profileimage {
      downloadUrl
    }
    memberOfOrganisationConnection {
      edges {
        node {
          id
          appConnection {
            edges {
              node {
                id
                machine_name
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;