const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { SearchResultsPage } = require('../pages/SearchResultsPage');

test.describe('Allred\'s product discovery', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.searchFor('filter');
  });

  test('TC-SEARCH-002: returns matching products for a valid query', async ({
    page,
  }) => {
    const resultsPage = new SearchResultsPage(page);

    await expect(page).toHaveURL(/\/shop\/search\?q=filter/);
    await expect(page).toHaveTitle(/Search: Filter - Allred's Inc\./);
    await expect(resultsPage.resultSummary).toBeVisible();
    await expect(resultsPage.productLinks.first()).toBeVisible();
  });

  test('TC-SEARCH-003: provides product sorting options', async ({ page }) => {
    const resultsPage = new SearchResultsPage(page);

    await expect(resultsPage.sortSelect).toBeVisible();
    await expect(resultsPage.sortSelect).toHaveValue('Relevance');
    await expect(resultsPage.sortSelect.locator('option')).toHaveCount(5);
  });

  test('TC-PRODUCT-001: opens a product details page from results', async ({
    page,
  }) => {
    const resultsPage = new SearchResultsPage(page);

    await resultsPage.openFirstProduct();

    await expect(page).toHaveURL(/\/product\/\d+\//);
    await expect(page).toHaveTitle(/- Allred's Inc\.$/);
    await expect(page.getByText(/^Part:/).first()).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Description' })).toBeVisible();
  });
});
