import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly computersMenu: Locator;
  readonly notebooksLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.computersMenu = page.getByRole('link', { name: 'Computers' }).first();
    this.notebooksLink = page.getByRole('link', { name: 'Notebooks' }).first();
  }

  async goto() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async navigateToNotebooks() {
    await this.computersMenu.click();
    await this.notebooksLink.click();
  }
}


