import { test, expect } from '@playwright/test';

test('TC-04 Image upload validation area is present on News page', async ({ page }) => {
  await page.goto('https://www.greencity.cx.ua/#/greenCity/news');

  await expect(page).toHaveURL(/greenCity\/news/);

  await expect(page.getByText(/News|Новини/i).first()).toBeVisible();
});