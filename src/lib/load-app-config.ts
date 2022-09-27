import { AppConfig } from '../common/types/types';

let appConfig: AppConfig;

/**
 * Used for loading the app config.
 *
 * It will check for the `REACT_APP_CONFIG_PATH` environment variable first,
 * and use `/tenant/app-config.json` as a fallback.
 * @returns App config
 */
export const loadAppConfig = async () => {
  if (appConfig === undefined) {
    const configUrl = process.env.REACT_APP_CONFIG_PATH || '/tenant/app-config.json';

    const appConfigRequest = await fetch(configUrl);
    appConfig = await appConfigRequest.json();
  }

  return appConfig;
};
