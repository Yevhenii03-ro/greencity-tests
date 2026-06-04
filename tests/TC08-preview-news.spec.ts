import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-08 Preview news displays entered title and main text', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const newsPage = new NewsPage(page);
  const createNewsPage = new CreateNewsPage(page);

  const title = 'Test Preview';
  const content = 'This is a test preview content';

  await loginPage.open();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await newsPage.open();
  await newsPage.clickCreateNews();

  await createNewsPage.fillTitle(title);
  await createNewsPage.selectTag('News');
  await createNewsPage.fillMainText(content);

  await createNewsPage.clickPreview();

  await expect(page.getByText(title)).toBeVisible();
  await expect(page.getByText(content)).toBeVisible();

  await expect(
    page.getByRole('button', { name: /back to editing|повернутися/i })
  ).toBeVisible();
});