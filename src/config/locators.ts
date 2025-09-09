export const locators = {
  contact: {
    navContact: '[data-test="nav-contact"]',
    firstNameInput: '[data-test="first-name"]',
    lastNameInput: '[data-test="last-name"]',
    emailInput: '[data-test="email"]',
    subjectInput: '[data-test="subject"]',
    messageInput: '[data-test="message"]',
    submitButton: '[data-test="contact-submit"]',
    firstNameError: '[data-test="first-name-error"]',
    lastNameError: '[data-test="last-name-error"]',
    emailError: '[data-test="email-error"]',
    subjectError: '[data-test="subject-error"]',
    messageError: '[data-test="message-error"]',
    successMessage: 'text=Thanks for your message! We'
  },
  product: {
    combinationPliersLink: '[data-test="product-01K4PGYX54KRVM06ATVKKPGG7R"]',
    addToCartButton: '[data-test="add-to-cart"]',
    productPrice: '[data-test="product-price"]'
  },
  cart: {
    navCart: '[data-test="nav-cart"]',
    productQuantity: '[data-test="product-quantity"]',
    linePrice: '[data-test="line-price"]',
    productPrice: '[data-test="product-price"]'
  }
};
