/**
 * Overwriting Cypress folder definition to be possible to use src directly instead of cypress/
 */
export const defaultPaths = {
  fixturesFolder: 'src/fixtures',
  downloadsFolder: 'src/downloads',
  screenshotsFolder: 'src/screenshots',
  videosFolder: 'src/videos',
  supportFolder: 'src/support',
};

export const e2ePaths = {
  specPattern: './src/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
  supportFile: './src/support/e2e.{js,jsx,ts,tsx}',
};
