const { acceptCookieConsentIfVisible } = require('../utils/cookieConsent');

class HomePage {
  constructor(page) {
    this.page = page;
    this.logo = page.getByRole('link', { name: "Allred's Inc." });
    this.searchInput = page
      .getByRole('textbox', { name: 'Search by EasyAsk' })
      .first();
    this.homeLink = page.getByRole('link', { name: 'Home', exact: true }).first();
    this.clearanceLink = page
      .getByRole('link', { name: 'Clearance', exact: true })
      .first();
    this.newsLink = page.getByRole('link', { name: 'News', exact: true }).first();
    this.eventsLink = page
      .getByRole('link', { name: 'Events', exact: true })
      .first();
  }

  async goto() {
    await this.page.goto('/');
    await acceptCookieConsentIfVisible(this.page);
  }

  async searchFor(term) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }

  async searchValidationMessage() {
    return this.searchInput.evaluate((input) => input.validationMessage);
  }
}

module.exports = { HomePage };
