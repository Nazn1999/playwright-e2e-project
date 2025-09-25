import { test, expect } from '../../fixtures/testFixtures';
import users from '../../test-data/users.json';

for (const user of users) {
  test(`E2E Purchase Flow for ${user.email}`, async ({
    registerPage,
    loginPage,
    homePage,
    productPage,
    cartPage,
    checkoutPage,
    confirmationPage,
  }) => {
    // Step 1: Register
    await registerPage.goto();
    await registerPage.register(user);

    // Step 2: Login
    await loginPage.goto();
    await loginPage.login(user);

    // Step 3: Navigate to laptops
    await homePage.goto();
    await homePage.navigateToNotebooks();

    // Step 4: Select laptop & add to cart
    await productPage.selectLaptop();
    await productPage.addToCartAndWaitForCartUpdate();

    // Step 5: Checkout
    await cartPage.gotoCart();
    await cartPage.proceedToCheckout();

    // Step 6: Fill billing/shipping details
    await checkoutPage.fillBillingDetails(user);

    // Step 7: Complete checkout
    await checkoutPage.completeCheckout();

    // Step 8: Confirm success
    const orderNum = await confirmationPage.validateOrderSuccess();
    expect(orderNum).toMatch(/^\d+$/);

    console.log(`✅ Order placed for ${user.email}, Order#: ${orderNum}`);
  });
}

