import { StrictMode } from 'react';
import { Amplify } from 'aws-amplify';
import ReactDOM from 'react-dom';
import { addLocale, useLocale } from 'ttag';
import { ApolloProvider } from '@apollo/client';
import { loadAppConfig, prepareApolloClient, getLanguage } from './lib/lib';

const assetPath = process.env.REACT_APP_ASSET_PATH || '/';

(async () => {
  const language = getLanguage();
  const translation = await fetch(`${assetPath}lang/${language}.json`).then((response) => response.json());

  const config = await loadAppConfig();
  const client = await prepareApolloClient(config);

  addLocale(language, translation);
  useLocale(language);

  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.region,
      userPoolId: config.userPool,
      userPoolWebClientId: config.clientId,
    },
  });

  const { App } = await import('./components/app');

  const id = process.env.REACT_APP_ROOT_ELEMENT || 'template_app';

  ReactDOM.render(
    <StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StrictMode>,
    document.getElementById(id),
  );
})();
