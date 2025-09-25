import { Page, Locator, expect } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
  readonly thankYouMessage: Locator;
  readonly orderNumber: Locator;

  constructor(page: Page) {
    this.page = page;
    this.thankYouMessage = page.locator('h1');
    this.orderNumber = page.locator('.order-number');
  }

  async validateOrderSuccess() {
    await expect(this.thankYouMessage).toHaveText('Thank you');
    const orderText = await this.orderNumber.textContent();
    expect(orderText).toMatch(/Order Number: \d+/);
    return orderText;
  }
}
