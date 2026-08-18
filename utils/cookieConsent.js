async function acceptCookieConsentIfVisible(page) {
  const acceptButton = page.getByRole('button', { name: 'I understand' });
  const appeared = await acceptButton
    .waitFor({ state: 'visible', timeout: 3_000 })
    .then(() => true)
    .catch(() => false);

  if (appeared) {
    await acceptButton.click();
    await acceptButton.waitFor({ state: 'hidden', timeout: 3_000 });
  }
}

module.exports = { acceptCookieConsentIfVisible };
