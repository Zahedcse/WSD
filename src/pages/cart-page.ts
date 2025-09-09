import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';
import { locators } from '../config/locators';

export class CartPage extends BasePage {
  private navCart: Locator;
  private productQuantity: Locator;
  private linePrice: Locator;
  private productPrice: Locator;

  constructor(page: Page) {
    super(page);
    this.navCart = page.locator(locators.cart.navCart);
    this.productQuantity = page.locator(locators.cart.productQuantity);
    this.linePrice = page.locator(locators.cart.linePrice);
    this.productPrice = page.locator(locators.cart.productPrice);
  }

  async navigateToCart(): Promise<void> {
    await this.navCart.click();
    await this.page.waitForLoadState('networkidle');
  }

  async updateQuantity(quantity: number): Promise<void> {
    await this.productQuantity.click();
    await this.productQuantity.fill(quantity.toString());
    await this.productQuantity.press('Enter');
  }

  async getLinePrice(): Promise<string> {
    return await this.linePrice.textContent() || '';
  }

  async getProductPrice(): Promise<string> {
    return await this.productPrice.textContent() || '';
  }
}
