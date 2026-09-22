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

  test('should load self-hosted fonts', async ({ page }) => {
    const requests = [];
    const fontRequests = [];
    page.on('request', (request) => {
      requests.push(request.url());
      if (request.resourceType() === 'font') fontRequests.push(request.url());
    });

    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);

    const googleFontHosts = new Set([
      'fonts.googleapis.com',
      'fonts.gstatic.com',
    ]);
    expect(
      requests.some((url) => googleFontHosts.has(new URL(url).hostname))
    ).toBe(false);
    expect(
      fontRequests.some((url) => url.includes('atkinson-hyperlegible'))
    ).toBe(true);
    expect(fontRequests.some((url) => url.includes('overpass'))).toBe(true);
  });
});
