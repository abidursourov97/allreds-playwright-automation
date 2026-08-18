class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.resultSummary = page
      .getByText(/Showing Items\s+\d+\s*-\s*\d+\s+of\s+\d+/)
      .first();
    this.productLinks = page.locator('a[href*="/product/"]:visible');
    this.sortSelect = page.getByRole('combobox').first();
  }

  async openFirstProduct() {
    await this.productLinks.first().click();
  }
}

module.exports = { SearchResultsPage };
