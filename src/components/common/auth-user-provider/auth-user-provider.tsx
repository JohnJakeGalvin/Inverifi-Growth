import { PropsWithChildren, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import {
  AuthUserContextValue,
  CurrentAuthenticatedUserReturnValue as AuthUser,
  GetUserQuery,
  GetUserQueryVariables,
} from 'common/types/types';
import { GET_USER } from 'graphql/queries/queries';
import { Alert, Box, CircularProgress } from '@mui/material';
import { APP_NAME } from 'common/constants/constants';
import { t } from 'ttag';
import { useQuery } from '@apollo/client';
import { AuthUserContextProvider } from 'context/context';

/**
 * Component for providing user authorization context
 * @param props
 * @returns `AuthUserProvider` component
 */
export const AuthUserProvider = ({ children }: PropsWithChildren<object>) => {
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [userId, setUserId] = useState<string>();

  const { data, loading } = useQuery<GetUserQuery, GetUserQueryVariables>(GET_USER, {
    skip: !userId,
    variables: {
      id: userId as string,
    },
  });
  const user = data?.User;

  useEffect(() => {
    setLoadingAuth(true);
    Auth.currentAuthenticatedUser().then((usr: AuthUser) => {
      setUserId(usr.attributes?.sub);
    }).finally(() => {
      setLoadingAuth(false);
    });
  }, []);

  if (loading || loadingAuth) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}>
        <CircularProgress disableShrink />
      </Box>
    );
  }

  const organization = user?.memberOfOrganisationConnection?.edges[0].node;
  const app = organization?.appConnection?.edges.find(({ node }) => node.machine_name === APP_NAME);

  const isAllLoaded = (
    user?.id
    && organization?.id
    && app?.node.id
  );

  if (!isAllLoaded) {
    const message = t`Something went wrong while loading the Template application`;
    return <Alert severity="error">{message}</Alert>;
  }

  const appNode = app.node;

  const value: AuthUserContextValue = {
    user: {
      id: user.id as string,
      username: user.username as string,
      profileImageUrl: user.profileimage?.downloadUrl || undefined,
    },
    organization: {
      __typename: organization.__typename as string,
      id: organization.id as string,
    },
    app: {
      __typename: appNode.__typename as string,
      id: appNode.id as string,
      machineName: appNode.machine_name,
    },
  };

  return (
    <AuthUserContextProvider value={value}>
      {children}
    </AuthUserContextProvider>
  );
};
