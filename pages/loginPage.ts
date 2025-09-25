import { Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async login(user: any) {
    await this.page.fill('#Email', 'nazn0982@gmail.com');
    await this.page.fill('#Password', 'Neha@123');
    await this.page.click('input[value="Log in"]');
  }
}
