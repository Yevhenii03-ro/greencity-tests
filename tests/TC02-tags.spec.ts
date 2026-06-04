import { test, expect } from '@playwright/test';

test('TC-02 User can select from 1 to 3 tags', async ({ page }) => {
  await page.goto('https://www.greencity.cx.ua/#/greenCity/news');

  await page.getByText('News', { exact: true }).click();

  

await page.locator('span').filter({ hasText: 'Events' }).first().click();
await page.locator('span').filter({ hasText: 'Education' }).first().click();

  const selectedTags = page.locator('.tag.active, .selected, .chosen');

  await expect(selectedTags).toHaveCount(3);

  await page.getByText('Initiatives', { exact: true }).click();

  await expect(selectedTags).toHaveCount(3);
});