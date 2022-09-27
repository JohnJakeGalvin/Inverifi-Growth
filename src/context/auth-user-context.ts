import { AuthUserContextValue } from 'common/types/types';
import { createContext } from 'react';

const defaultValue = {} as AuthUserContextValue;

export const AuthUserContext = createContext<AuthUserContextValue>(defaultValue);
export const {
  Provider: AuthUserContextProvider,
  Consumer: AuthUserContextConsumer,
} = AuthUserContext;
