import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  readonly form: Locator;

  readonly emailField: Locator;

  readonly passwordField: Locator;

  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.form = this.page.locator('form');
    this.emailField = this.form.locator('[placeholder="Email"]');
    this.passwordField = this.form.locator('[placeholder="Password"]');
    this.loginButton = this.form.locator('text=Login');
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async fillCredentials(email: string, password: string) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
  }

  async expectLoginSuccess() {
    await expect(this.page).toHaveURL('/');
  }

  async expectInvalidEmailField() {
    const el = await this.page.isVisible('[placeholder="Email"]:invalid');
    expect(el, 'Email must be is invalid').toBeTruthy();
  }

  async expectInvalidPasswordField() {
    const el = await this.page.isVisible('[placeholder="Password"]:invalid');
    expect(el, 'Password must be is invalid').toBeTruthy();
  }
}
