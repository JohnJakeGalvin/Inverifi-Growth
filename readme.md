## Accessing private NPM registry

In order to access required packages, please configure `yarn`/`npm` to access Invotra private registry first.

_**NOTE**: These steps are same for all private NPM packages hosted at GitHub and should be only done once._

1. Create a new GitHub personal access token. Open [GitHub personal access tokens page](https://github.com/settings/tokens),
click `Generate a new token`, input a token name (e.g. 'my token for NPM registry') and check `read:packages`. Do not
select any other scopes. Create a token and store it in a safe place.
2. Create an `.npmrc` file in your **home directory** with following contents, replacing `YOUR_TOKEN` with an actual
token string:

```
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

## Installation

1. In the root of the project, you can install all the dependencies with one command:

    ```
      yarn install
    ```

2. After installing the packages, in the root of the project, you need to run the command to [git-hooks](https://www.npmjs.com/package/simple-git-hooks):

    ```
      npx simple-git-hooks
    ```

    **Now, for each of your commits, the linter will be launched and check your code.**

3. Use `.env.example` to create `.env` file for local development. If you run app individually, you might need `REACT_APP_INVOTRA_THEME` only

4. If you work with local backend, create `public/tenant/app-config.local.json` file for local development. Set `REACT_APP_CONFIG_PATH` env variable

5. To run the app from the command line (terminal) in the root folder, run:

    ```
    yarn start
    ```

## Available Scripts

Check `package.json` to find available scripts.
