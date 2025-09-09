import { Page, Locator } from '@playwright/test';
import { BasePage } from '../utils/base-page';
import { locators } from '../config/locators';

export class ContactPage extends BasePage {
  private navContact: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private subjectInput: Locator;
  private messageInput: Locator;
  private submitButton: Locator;


  constructor(page: Page) {
    super(page);
    this.navContact = page.locator(locators.contact.navContact);
    this.firstNameInput = page.locator(locators.contact.firstNameInput);
    this.lastNameInput = page.locator(locators.contact.lastNameInput);
    this.emailInput = page.locator(locators.contact.emailInput);
    this.subjectInput = page.locator(locators.contact.subjectInput);
    this.messageInput = page.locator(locators.contact.messageInput);
    this.submitButton = page.locator(locators.contact.submitButton);
  }

  async navigateToContact(): Promise<void> {
    await this.page.goto('https://practicesoftwaretesting.com/');
    await this.navContact.click();
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForSelector('[data-test="first-name"]', { state: 'visible' });
  }

  async fillContactForm(firstName: string, lastName: string, email: string, subject: string, message: string): Promise<void> {
    await this.firstNameInput.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.click();
    await this.lastNameInput.fill(lastName);
    await this.emailInput.click();
    await this.emailInput.fill(email);
    await this.subjectInput.selectOption(subject);
    await this.messageInput.click();
    await this.messageInput.fill(message);
  }

  async submitForm(): Promise<void> {
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async waitForSuccessMessage(): Promise<void> {
    await this.page.waitForSelector('text=Thanks for your message! We', { state: 'visible' });
  }

  async waitForAllValidationErrors(): Promise<void> {
    await Promise.all([
      this.page.waitForSelector('text=First name is required', { state: 'visible' }),
      this.page.waitForSelector('text=Last name is required', { state: 'visible' }),
      this.page.waitForSelector('text=Email is required', { state: 'visible' }),
      this.page.waitForSelector('text=Subject is required', { state: 'visible' }),
      this.page.waitForSelector('text=Message is required', { state: 'visible' })
    ]);
  }
}
