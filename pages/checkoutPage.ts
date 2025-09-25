import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async fillBillingDetails(user: any) {
    // Check if new address form is visible
    const billingForm = this.page.locator('#BillingNewAddress_FirstName');
    if (await billingForm.isVisible()) {
      console.log('ℹ️ Filling new billing address...');
      if (user.firstName) await this.page.fill('#BillingNewAddress_FirstName', user.firstName);
      if (user.lastName) await this.page.fill('#BillingNewAddress_LastName', user.lastName);

      const emailInput = this.page.locator('#BillingNewAddress_Email');
      if (await emailInput.isVisible()) {
        await emailInput.fill(user.email);
      }

      if (user.country) await this.page.selectOption('#BillingNewAddress_CountryId', { label: user.country });
      if (user.city) await this.page.fill('#BillingNewAddress_City', user.city);
      if (user.address) await this.page.fill('#BillingNewAddress_Address1', user.address);
      if (user.zip) await this.page.fill('#BillingNewAddress_ZipPostalCode', user.zip);
      if (user.phone) await this.page.fill('#BillingNewAddress_PhoneNumber', user.phone);
    } else {
      console.log('ℹ️ Billing address already exists, skipping form fill.');
    }

    // ✅ Always click Continue for Billing step
    await this.page.waitForSelector('input.new-address-next-step-button', { state: 'visible' });
    await this.page.click('input.new-address-next-step-button');
  }

  async completeCheckout() {
      /// Wait for the shipping section to become active
await this.page.waitForSelector('#opc-shipping.tab-section.allow.active', { timeout: 10000 });

// THEN wait for the continue button
await this.page.waitForSelector('#opc-shipping input.shipping-address-next-step-button', { state: 'visible' });
await this.page.click('#opc-shipping input.shipping-address-next-step-button');


    // Wait for the "Loading next step..." element to be visible, indicating the next step is loading
await this.page.waitForSelector('#shipping-please-wait', { state: 'visible' });

    // Step 3: Shipping method
    await this.page.waitForSelector('input.shipping-method-next-step-button', { state: 'visible' });
    await this.page.click('input.shipping-method-next-step-button');

    // Step 4: Payment method
    await this.page.waitForSelector('input.payment-method-next-step-button', { state: 'visible' });
    await this.page.click('input.payment-method-next-step-button');

    // Step 5: Payment info
    await this.page.waitForSelector('input.payment-info-next-step-button', { state: 'visible' });
    await this.page.click('input.payment-info-next-step-button');

    // Step 6: Confirm order
    await this.page.waitForSelector('input.confirm-order-next-step-button', { state: 'visible' });
    await this.page.click('input.confirm-order-next-step-button');

    // ✅ Verify order success
    await this.page.waitForSelector('text=Your order has been successfully processed!', { timeout: 20000 });
  }
}
