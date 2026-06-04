/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://www.greencity.cx.ua/#/greenCity',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  reporter: [
  ['list'],
  ['html'],
  ['allure-playwright']
],

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});