import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';

test('TC-09 Edit news button is visible for author', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const newsPage = new NewsPage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await newsPage.open();

  await page.locator('a').first().click();

  await expect(
    page.getByRole('button', { name: /edit news|редагувати/i })
  ).toBeVisible();
});