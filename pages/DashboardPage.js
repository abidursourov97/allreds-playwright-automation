class DashboardPage {
  constructor(page) {
    this.page = page;
    this.openOrders = page.getByText('Open Orders', { exact: true });
    this.pendingOrders = page.getByText('Pending Orders', { exact: true });
    this.monthlyOrderAmount = page.getByText('Monthly Order Amount', {
      exact: true,
    });
    this.profileLink = page.getByRole('link', { name: 'My Profile' });
    this.orderHistoryLink = page.getByRole('link', { name: 'Order History' });
    this.invoicesLink = page.getByRole('link', { name: 'Invoices' });
  }
}

module.exports = { DashboardPage };
