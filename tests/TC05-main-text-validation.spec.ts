import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-05 Main Text field validation', async ({ page }) => {
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
  await createNewsPage.selectTag('News');
  await createNewsPage.fillMainText('Short text');

  await expect(createNewsPage.publishButton).toBeDisabled();

  await createNewsPage.fillMainText('This is a valid test content');

  await expect(createNewsPage.publishButton).toBeEnabled();
});