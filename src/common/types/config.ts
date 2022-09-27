export type AppConfig = {
  region: string,
  userPool: string,
  userPoolBaseUri: string,
  clientId: string,
  callbackUri: string,
  signoutUri: string,
  tokenScopes: string[],
  graphqlUri: string,
  chargebeeSite: string,
  chargebeeProduct: string,
  googleAnalytics: string,
};
