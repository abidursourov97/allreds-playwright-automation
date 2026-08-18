const { acceptCookieConsentIfVisible } = require('../utils/cookieConsent');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole('heading', {
      name: 'Login to your account.',
    });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.rememberMe = page.getByRole('checkbox', { name: 'Remember me' });
    this.signInButton = page.getByRole('button', { name: /Sign In/ });
    this.forgotPasswordLink = page.getByRole('link', {
      name: 'Forgot password?',
    });
  }

  async goto() {
    await this.page.goto('/login');
    await acceptCookieConsentIfVisible(this.page);
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    // This site enables the submit button from keyboard events.
    await this.passwordInput.pressSequentially(password, { delay: 25 });
    await this.signInButton.click();
  }

  async emailValidationMessage() {
    return this.emailInput.evaluate((input) => input.validationMessage);
  }
}

module.exports = { LoginPage };
