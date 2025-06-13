// Playwright configuration file
// See https://playwright.dev/docs/test-configuration

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default {
  testDir: './tests/playwright',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'http://localhost:8888', // Change if your dev server runs elsewhere
  },
};
