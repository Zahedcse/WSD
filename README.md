# Test Automation Framework for WSD Automation Task

A Playwright TypeScript test automation framework for testing the Practice Software Testing website.

## Prerequisites

- Node.js (version 16 or higher)
- npm package manager

## Installation

1. Clone the repository:
cd WSD

2. Install dependencies:
npm install

3. Install Playwright browsers:
npx playwright install

## Framework Structure

```
src/
├── config/
│   ├── test-data.ts      # Test data configuration
│   └── locators.ts       # Page element locators
├── pages/
│   ├── contact-page.ts   # Contact page object
│   ├── product-page.ts   # Product page object
│   └── cart-page.ts      # Cart page object
└── utils/
    └── base-page.ts      # Base page class

tests/
├── contact/
│   └── contact-form.spec.ts    # Contact form tests
└── cart/
    └── cart-functionality.spec.ts  # Cart functionality tests
```

## Running Tests

### Run all tests:
```bash
npx playwright test
```

### Run specific test files:
```bash
npx playwright test tests/contact/contact-form.spec.ts
npx playwright test tests/cart/cart-functionality.spec.ts
```

### Run tests in headed mode (see browser):
```bash
npx playwright test --headed
```

### View test report:
```bash
npx playwright show-report
```

## Test Coverage

1. **Contact Form Validation**
   - Empty form submission validation
   - Valid form submission with success message

2. **Cart Functionality**
   - Add product to cart
   - Update product quantity
   - Verify price updates

## Configuration

- **Browser**: Google Chrome only
- **Base URL**: `https://practicesoftwaretesting.com`
- **Headless**: Disabled (tests run in headed mode by default)
- **Test Directory**: `./tests`
- **Reporter**: HTML report

## Framework Features

- **Page Object Model**: Organized page objects for maintainable tests
- **Centralized Locators**: All element locators in one configuration file
- **Test Data Management**: Centralized test data configuration
- **Base Page Class**: Common functionality shared across page objects
- **TypeScript**: Type-safe test automation
