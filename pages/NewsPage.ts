import { Page } from '@playwright/test';

export class NewsPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.greencity.cx.ua/#/greenCity/news');
  }

  async clickCreateNews() {
    await this.page.getByRole('button', { name: /create news/i }).click();
  }
}