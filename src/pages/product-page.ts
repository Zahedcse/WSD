import { Page } from '@playwright/test';
import { Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';
import { locators } from '../config/locators';

export class ProductPage extends BasePage {
  private productPrice: Locator;
  private addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.productPrice = page.locator(locators.product.productPrice);
    this.addToCartButton = page.locator(locators.product.addToCartButton);
  }

  async navigateToCombinationPliers(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.page.waitForLoadState('networkidle');
    await this.page.getByText('Combination Pliers').click();
    await this.page.waitForLoadState('networkidle');
  }

  async getProductPrice(): Promise<string> {
    return await this.productPrice.textContent() || '';
  }

  async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
