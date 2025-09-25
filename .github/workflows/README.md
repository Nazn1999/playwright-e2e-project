# Playwright E2E Test Automation Framework

This is an end-to-end test automation framework built with Playwright for testing the e-commerce purchase flow. The framework follows the Page Object Model (POM) design pattern for better maintainability and reusability.

## Features

- **Page Object Model**: Organized test structure with separate page classes
- **Data-Driven Testing**: Support for multiple test data sets
- **Cross-Browser Testing**: Test execution on Chromium, Firefox, and WebKit
- **Parallel Execution**: Run tests in parallel for faster execution
- **Detailed Reporting**: HTML and JUnit reports with screenshots and videos
- **CI/CD Ready**: Easy integration with CI/CD pipelines

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or Yarn
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd playwright-e2e
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Project Structure

```
playwright-e2e/
├── tests/
│   ├── e2e/                  # Test files
│   ├── pages/                # Page Object classes
│   └── test-data/            # Test data files
├── test-results/             # Test execution results (reports, screenshots, videos)
├── .gitignore
├── package.json
├── playwright.config.ts      # Playwright configuration
└── README.md
```

## Running Tests

- Run all tests in headless mode:
  ```bash
  npm test
  ```

- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```

- Run tests in debug mode:
  ```bash
  npm run test:debug
  ```

- Run tests on a specific browser:
  ```bash
  npx playwright test --project=chromium
  ```

- Run a specific test file:
  ```bash
  npx playwright test tests/e2e/purchase-flow.spec.ts
  ```

- Run tests with a specific tag:
  ```bash
  npx playwright test --grep @smoke
  ```

## Viewing Reports

After test execution, you can view the HTML report with:

```bash
npx playwright show-report
```

## Test Data Management

Test data is managed in the `tests/test-data/test-data.ts` file. You can modify this file to add or update test data as needed.

## Environment Configuration

Create a `.env` file in the root directory to set environment-specific variables:

```env
BASE_URL=https://demowebshop.tricentis.com
USER_EMAIL=test@example.com
USER_PASSWORD=yourpassword
```

## Best Practices

1. **Page Object Model**: Each page should have its own class in the `pages` directory.
2. **Test Data**: Keep test data separate from test logic.
3. **Selectors**: Use data-testid attributes for reliable element selection.
4. **Assertions**: Add meaningful assertions to verify the application state.
5. **Error Handling**: Implement proper error handling and logging.

## CI/CD Integration

This framework can be easily integrated with CI/CD pipelines. Example GitHub Actions workflow is provided in `.github/workflows/run-tests.yml`.

## Troubleshooting

- If tests fail with browser launch issues, try reinstalling browsers:
  ```bash
  npx playwright install
  ```

- For debugging, use the Playwright Inspector:
  ```bash
  npx playwright codegen https://demowebshop.tricentis.com
  ```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
