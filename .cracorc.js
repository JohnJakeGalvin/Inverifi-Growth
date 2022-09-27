require('dotenv').config();

const ASSET_PATH = process.env.REACT_APP_ASSET_PATH || '/';

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = ASSET_PATH;
      config.output.filename = 'static/js/bundle.js';

      config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        'aws-amplify': 'aws_amplify',
      };

      return config;
    }
  }
};
