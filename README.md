# Allred's Playwright Automation Portfolio

![Playwright](https://img.shields.io/badge/Playwright-JavaScript-2EAD33?logo=playwright)
![Test Type](https://img.shields.io/badge/Test%20Type-E2E-blue)
![Pattern](https://img.shields.io/badge/Pattern-Page%20Object%20Model-orange)

A focused end-to-end test automation project for the
[Allred's B2B website](https://allreds.amplify-b2b.com). It demonstrates safe
public-site and authenticated testing without changing cart, order, payment, or
customer data.

## What this project demonstrates

- Positive and negative UI scenarios
- Page Object Model for reusable page actions and locators
- User-facing Playwright locators and web-first assertions
- Public homepage, search, product, login, and authorization coverage
- Optional credential-based dashboard test
- HTML reports, screenshots, videos, and traces on failure
- GitHub Actions for repeatable public smoke testing

## Test coverage

The suite contains 10 focused scenarios:

- Homepage branding and navigation
- Search minimum-length validation
- Search results and sort options
- Product details navigation
- Login form and required-field validation
- Protected-route redirect
- Authenticated customer dashboard

See [TEST_CASES.md](TEST_CASES.md) for IDs and expected results.

## Project structure

```text
.
|-- pages/
|   |-- DashboardPage.js
|   |-- HomePage.js
|   |-- LoginPage.js
|   `-- SearchResultsPage.js
|-- utils/
|   `-- cookieConsent.js
|-- tests/
|   |-- auth.spec.js
|   |-- catalog.spec.js
|   `-- home.spec.js
|-- .github/workflows/playwright.yml
|-- .env.example
|-- playwright.config.js
|-- TEST_CASES.md
`-- README.md
```

## Setup

Requirements: Node.js 20 or later.

```bash
npm install
npx playwright install chromium
```

Run all public tests without credentials:

```bash
npm run test:public
```

Run in a visible browser or Playwright UI mode:

```bash
npm run test:headed
npm run test:ui
```

## Authenticated test

Copy `.env.example` to `.env`, then add credentials for an authorized test
account:

```dotenv
BASE_URL=https://allreds.amplify-b2b.com
TEST_EMAIL=your-test-email@example.com
TEST_PASSWORD=your-test-password
```

Run the complete suite:

```bash
npm test
```

`.env` is ignored by Git so credentials are never committed. If credentials are
not configured, the authenticated test is skipped automatically.

## Reports and debugging

```bash
npm run report
npm run test:debug
```

The configuration keeps an HTML report and captures a screenshot, video, and
trace when a test fails.

## Responsible test scope

This portfolio is intentionally non-destructive. It does not add or remove cart
items, submit orders, make payments, change customer details, or delete data.

## Author

Abidur Rahman Sourov — QA and Software Test Automation Portfolio
