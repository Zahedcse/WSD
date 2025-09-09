import { test, expect } from '@playwright/test';
import { ProductPage } from '../../src/pages/product-page';
import { CartPage } from '../../src/pages/cart-page';
import { testData } from '../../src/config/test-data';

test.describe('Cart Functionality', () => {
  let productPage: ProductPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
  });

  test('should add product to cart and update quantity', async ({ page }) => {
    await productPage.navigateToCombinationPliers();
    await productPage.addToCart();
    await expect(page.getByRole('alert', { name: 'Product added to shopping' })).toBeVisible();

    await cartPage.navigateToCart();

    const unitPriceText = await cartPage.getProductPrice();
    const unitPrice = parseFloat(unitPriceText.replace('$', ''));

    const initialLinePriceText = await cartPage.getLinePrice();
    const initialLinePrice = parseFloat(initialLinePriceText.replace('$', ''));
    expect(initialLinePrice).toBe(unitPrice);

    await cartPage.updateQuantity(testData.cart.quantity);
    await expect(page.getByRole('alert', { name: 'Product quantity updated.' })).toBeVisible();

    const expectedTotal = unitPrice * 3;
    await expect(page.locator('[data-test="line-price"]')).toHaveText(`$${expectedTotal.toFixed(2)}`);

    const updatedLinePriceText = await cartPage.getLinePrice();
    const updatedLinePrice = parseFloat(updatedLinePriceText.replace('$', ''));
    expect(updatedLinePrice).toBeGreaterThan(initialLinePrice);
  });
});
