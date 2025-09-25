import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly cartQuantity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('#add-to-cart-button-31'); // Add to cart button
    this.cartQuantity = page.locator('#topcartlink .cart-qty');   // Cart quantity badge
  }

  async selectLaptop() {
    const laptopLink = this.page.locator('h2.product-title a', { hasText: '14.1-inch Laptop' });
    await laptopLink.scrollIntoViewIfNeeded();
    await laptopLink.click();

    // ✅ Ensure product page loaded before moving on
    await expect(this.page.locator('h1')).toHaveText('14.1-inch Laptop');
  }

  async getCartQuantity(): Promise<number> {
    const text = await this.cartQuantity.innerText();
    return parseInt(text.replace(/[()]/g, ''), 10);
  }

  async addToCartAndWaitForCartUpdate(): Promise<void> {
    const beforeQty = await this.getCartQuantity();

    // ✅ Click Add to cart
    await this.addToCartButton.click();

    // ✅ Wait until cart updates (new qty > old qty)
    await expect
      .poll(async () => await this.getCartQuantity(), { timeout: 15000 })
      .toBeGreaterThan(beforeQty);
  }
}


