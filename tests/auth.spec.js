const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test.describe('Allred\'s authentication', () => {
  test('TC-AUTH-001: displays login and password-recovery controls', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.heading).toBeVisible();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.rememberMe).toBeVisible();
    await expect(loginPage.forgotPasswordLink).toHaveAttribute(
      'href',
      /forgot-password/,
    );
  });

  test('TC-AUTH-002: requires an email before submitting login', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.signInButton.click();

    await expect(page).toHaveURL(/\/login$/);
    expect(await loginPage.emailValidationMessage()).not.toBe('');
  });

  test('TC-AUTH-003: redirects an unauthenticated user away from dashboard', async ({
    page,
  }) => {
    await page.goto('/dashboard');

    await expect(page).toHaveURL(/\/login/);
    await expect(
      page.getByRole('heading', { name: 'Login to your account.' }),
    ).toBeVisible();
  });

  test('TC-AUTH-004 @authenticated: signs in and shows the customer dashboard', async ({
    page,
  }) => {
    const email = process.env.TEST_EMAIL;
    const password = process.env.TEST_PASSWORD;
    test.skip(!email || !password, 'Set TEST_EMAIL and TEST_PASSWORD in .env');

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.login(email, password);

    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(dashboardPage.openOrders).toBeVisible();
    await expect(dashboardPage.pendingOrders).toBeVisible();
    await expect(dashboardPage.monthlyOrderAmount).toBeVisible();
    await expect(dashboardPage.profileLink).toBeVisible();
    await expect(dashboardPage.orderHistoryLink).toBeVisible();
    await expect(dashboardPage.invoicesLink).toBeVisible();
  });
});
