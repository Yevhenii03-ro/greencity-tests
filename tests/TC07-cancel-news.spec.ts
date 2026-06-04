import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-07 Cancel news creation confirmation modal', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const newsPage = new NewsPage(page);
  const createNewsPage = new CreateNewsPage(page);

  await loginPage.open();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await newsPage.open();
  await newsPage.clickCreateNews();

  await createNewsPage.fillTitle('Test');
  await createNewsPage.fillMainText('Test content with 20 chars');

  await createNewsPage.clickCancel();

  await expect(createNewsPage.cancelModalText).toBeVisible();

  await createNewsPage.continueEditingButton.click();

  await expect(createNewsPage.titleInput).toHaveValue('Test');

  await createNewsPage.clickCancel();

  await expect(createNewsPage.cancelModalText).toBeVisible();

  await createNewsPage.yesCancelButton.click();

  await expect(page).toHaveURL(/greenCity\/news/);
});