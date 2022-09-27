import { AuthUser } from './auth-user';

export type AuthUserContextValue = {
  user: AuthUser;
  organization: {
    __typename: string;
    id: string;
  };
  app: {
    __typename: string;
    id: string;
    machineName: string;
  }
};
