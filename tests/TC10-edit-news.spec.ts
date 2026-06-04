import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { NewsPage } from '../pages/NewsPage';
import { CreateNewsPage } from '../pages/CreateNewsPage';

test('TC-10 Author can edit own news', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const newsPage = new NewsPage(page);
  const createNewsPage = new CreateNewsPage(page);

  const updatedTitle = 'Updated Test News';
  const updatedContent = 'Updated test news content with more than twenty symbols';

  await loginPage.open();

  await loginPage.login(
    process.env.USER_EMAIL!,
    process.env.USER_PASSWORD!
  );

  await newsPage.open();

  await page.locator('a').first().click();

  const createdDate = await page.locator('time, .date').first().textContent();

  await page.getByRole('button', { name: /edit news|редагувати/i }).click();

  await createNewsPage.fillTitle(updatedTitle);
  await createNewsPage.fillMainText(updatedContent);
  await createNewsPage.selectTag('Events');

  await page.getByRole('button', { name: /submit|save|зберегти/i }).click();

  await expect(page.getByText(updatedTitle)).toBeVisible();
  await expect(page.getByText(updatedContent)).toBeVisible();

  await expect(page.locator('time, .date').first()).toHaveText(createdDate ?? '');
});