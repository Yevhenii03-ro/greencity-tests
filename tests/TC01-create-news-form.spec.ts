import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-01 Create News page contains all required elements', async ({ page }) => {
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

  await expect(createNewsPage.titleField).toBeVisible();
  await expect(createNewsPage.tagSection).toBeVisible();
  await expect(createNewsPage.addImageField).toBeVisible();
  await expect(createNewsPage.mainTextField).toBeVisible();
  await expect(createNewsPage.authorField).toBeVisible();
  await expect(createNewsPage.dateField).toBeVisible();
  await expect(createNewsPage.sourceField).toBeVisible();

  await expect(createNewsPage.cancelButton).toBeVisible();
  await expect(createNewsPage.previewButton).toBeVisible();
  await expect(createNewsPage.publishButton).toBeVisible();
});