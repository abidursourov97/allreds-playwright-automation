const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test.describe('Allred\'s public homepage', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });

  test('TC-HOME-001: displays the brand and page title', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(page).toHaveTitle("Home - Allred's Inc.");
    await expect(homePage.logo).toBeVisible();
    await expect(homePage.searchInput).toBeVisible();
  });

  test('TC-HOME-002: displays primary navigation links', async ({ page }) => {
    const homePage = new HomePage(page);

    await expect(homePage.homeLink).toBeVisible();
    await expect(homePage.clearanceLink).toBeVisible();
    await expect(homePage.newsLink).toBeVisible();
    await expect(homePage.eventsLink).toBeVisible();
  });

  test('TC-SEARCH-001: rejects a search shorter than three characters', async ({
    page,
  }) => {
    const homePage = new HomePage(page);

    await homePage.searchFor('ab');

    await expect(page).toHaveURL(/\/$/);
    expect(await homePage.searchValidationMessage()).not.toBe('');
  });
});
