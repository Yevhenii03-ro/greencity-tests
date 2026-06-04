import { test, expect } from '@playwright/test';

test('TC-03 Create News form is not available without successful login', async ({ page }) => {
  await page.goto('https://www.greencity.cx.ua/#/greenCity/news');

  await expect(page).toHaveURL(/greenCity\/news/);

  await expect(
    page.getByRole('button', { name: /create news|створити новину/i })
  ).toHaveCount(0);
});