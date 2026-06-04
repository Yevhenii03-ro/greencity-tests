import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.greencity.cx.ua/#/greenCity');
  }

  async login(email: string, password: string) {
    await this.page.getByRole('textbox', { name: 'Електронна пошта' }).fill(email);

    await this.page.getByRole('textbox', { name: 'Пароль' }).fill(password);

    await this.page.getByRole('button', { name: 'Увійти' }).click();
  }
}