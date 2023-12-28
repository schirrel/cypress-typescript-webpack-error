import { defineConfig } from 'cypress';
import * as path from 'path';
import { env } from './config/env';
import { defaultPaths, e2ePaths } from './config/paths';

console.log(path.resolve(__dirname, './src/framework'));
const config = {
  scrollBehavior: false,
  ...defaultPaths,
  reporter: 'cypress-mochawesome-reporter',
  env,
  e2e: {
    ...e2ePaths,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      const webpackPreprocessor = require('@cypress/webpack-preprocessor');
      // @src alias
      const options = {
        webpackOptions: {
          module: {
            rules: [
              {
                test: /\.ts?$/,
                exclude: [/node_modules/],
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                    },
                  },
                ],
              },
            ],
          },
          resolve: {
            extensions: ['.ts', '.js'],
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
        },
        watchOptions: {},
      };
      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  // so we can handle iframes
  chromeWebSecurity: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: 'report',
  },
};
export default defineConfig(config);
