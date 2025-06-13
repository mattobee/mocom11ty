// Playwright configuration file
// See https://playwright.dev/docs/test-configuration

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export default {
  testDir: './tests/playwright',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: process.env.BASE_URL || 'http://localhost:8888', // Uses BASE_URL env var if set
  },
};
