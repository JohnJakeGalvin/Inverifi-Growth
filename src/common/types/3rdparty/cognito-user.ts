// It's a shame but Cognito / Amplify libraries doesn't include correct types for a user object.
// These definitions may be inaccurate / incomplete, that's just a part we're using.
export type CurrentAuthenticatedUserReturnValue = {
  attributes?: CognitoAuthenticatedUserAttributes,
  signInUserSession: {
    // clockDrift *should* be number but it's not documented so
    // it's defined as number | undefined | unknown to be safe.
    clockDrift?: number | unknown,
    accessToken: {
      jwtToken: string,
      payload: {
        exp: number,
      },
    },
    idToken: {
      jwtToken: string,
      payload: {
        exp: number,
      },
    },
    refreshToken: {
      token: string,
    },
  },
  username?: string,
};

export type CognitoAuthenticatedUserAttributes = {
  email?: string,
  email_verified?: boolean,
  phone_number?: string,
  phone_number_verified?: boolean,
  sub: string,
};
