
// Basic Playwright test for the homepage
import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('http://localhost:8888'); // Change port if needed
    await expect(page).toHaveTitle('Matt Obee - design technologist specialising in accessibility');
  });

  test('should display the site header', async ({ page }) => {
    await page.goto('http://localhost:8888');
    // Only check the first header in the main document, not inside shadow DOM or web components
    const header = page.locator('body > header');
    await expect(header).toBeVisible();
  });
});
