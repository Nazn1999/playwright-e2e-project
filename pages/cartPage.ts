import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutTerms: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutTerms = page.locator('#termsofservice');
    this.checkoutButton = page.locator('button[name="checkout"]');
  }

  async gotoCart() {
    await this.page.goto('https://demowebshop.tricentis.com/cart');
  }

  async proceedToCheckout() {
    await this.checkoutTerms.check(); // ✅ must check terms
    await this.checkoutButton.click();
  }
}

