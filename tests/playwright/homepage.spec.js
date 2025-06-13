// Basic Playwright test for the homepage
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(
      'Matt Obee - design technologist specialising in accessibility'
    );
    // Accessibility scan
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should display the site header', async ({ page }) => {
    await page.goto('/');
    // Only check the first header in the main document, not inside shadow DOM or web components
    const header = page.locator('body > header');
    await expect(header).toBeVisible();
  });
});
