# GreenCity QA Automation

Automated UI tests for GreenCity News page using Playwright and TypeScript.

## Technologies
- Playwright
- TypeScript
- Node.js
- Allure Report

## Test Cases
- TC-01 Create News page contains required elements
- TC-02 User can select from 1 to 3 tags
- TC-03 Create News form is not available without successful login
- TC-04 Image upload validation area is present on News page
- TC-05 News page opens successfully
- TC-06 Create News button is displayed
- TC-07 News section is visible
- TC-08 Events section is visible
- TC-09 Education section is visible
- TC-10 Initiatives section is visible

## Installation

```bash
npm install
```

## Run Tests

```bash
npx playwright test
```

## Generate Allure Report

```bash
npx allure serve allure-results
```