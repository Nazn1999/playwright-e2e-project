import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demowebshop.tricentis.com/register');
  }

  async register(user: any) {
    if (user.gender === "M") {
      await this.page.check('#gender-male');
    } else {
      await this.page.check('#gender-female');
    }
    await this.page.fill('#FirstName', 'Neha');
    await this.page.fill('#LastName', 'Naz');
    await this.page.fill('#Email', 'nazn0982@gmail.com');
    await this.page.fill('#Password', 'Neha@123');
    await this.page.fill('#ConfirmPassword','Neha@123');
    await this.page.click('#register-button');
  }
}
