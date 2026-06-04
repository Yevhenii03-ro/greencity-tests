import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-06 Source field validation', async ({ page }) => {
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

  await createNewsPage.fillTitle('Test Source Validation');
  await createNewsPage.selectTag('News');
  await createNewsPage.fillMainText('This is a valid test content for source validation');

  await createNewsPage.fillSource('www.example.com');

  await expect(createNewsPage.sourceError).toBeVisible();
  await expect(createNewsPage.publishButton).toBeDisabled();

  await createNewsPage.fillSource('https://example.com');

  await expect(createNewsPage.sourceError).not.toBeVisible();
  await expect(createNewsPage.publishButton).toBeEnabled();
});