import { defineConfig } from "cypress";
const config = {
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 60000,
  requestTimeout: 60000,
  // so we can handle iframes
  chromeWebSecurity: false,
};
export default defineConfig(config);
