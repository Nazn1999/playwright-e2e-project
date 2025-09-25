import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { ConfirmationPage } from '../pages/confirmationPage';
import { RegisterPage } from '../pages/registerPage';
import { LoginPage } from '../pages/loginPage';

type Fixtures = {
  homePage: HomePage;
  productPage: ProductPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  confirmationPage: ConfirmationPage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => { await use(new HomePage(page)); },
  productPage: async ({ page }, use) => { await use(new ProductPage(page)); },
  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
  checkoutPage: async ({ page }, use) => { await use(new CheckoutPage(page)); },
  confirmationPage: async ({ page }, use) => { await use(new ConfirmationPage(page)); },
  registerPage: async ({ page }, use) => { await use(new RegisterPage(page)); },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); }
});

export { expect } from '@playwright/test';
