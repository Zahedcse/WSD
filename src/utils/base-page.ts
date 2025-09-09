import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForElement(selector: string): Promise<Locator> {
    return this.page.locator(selector);
  }

  async clickElement(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }

  async fillInput(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }

  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).textContent() || '';
  }

  async isElementVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
