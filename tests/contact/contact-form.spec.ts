import { test, expect } from '@playwright/test';
import { ContactPage } from '../../src/pages/contact-page';
import { testData } from '../../src/config/test-data';

test.describe('Contact Form Validation', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
  });

  test('should display validation errors when form is submitted with empty fields', async ({ page }) => {
    await contactPage.navigateToContact();
    await contactPage.submitForm();
    await contactPage.waitForAllValidationErrors();


    await expect(page.getByText('First name is required')).toBeVisible();
    await expect(page.getByText('Last name is required')).toBeVisible();
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Subject is required')).toBeVisible();
    await expect(page.getByText('Message is required')).toBeVisible();
  });

  test('should successfully submit form with valid data', async ({ page }) => {
    await contactPage.navigateToContact();

    const { firstName, lastName, email, subject, message } = testData.contact.valid;
    await contactPage.fillContactForm(firstName, lastName, email, subject, message);
    await contactPage.submitForm();

    await contactPage.waitForSuccessMessage();
    await expect(page.getByText('Thanks for your message! We')).toBeVisible();
  });
});
