import { expect, Locator, Page } from '@playwright/test';
import { LoginPage } from './login.page-obj';
import { PageObject } from '../utils/base.page-obj';

export class DashboardPage extends PageObject {
  readonly posts: Locator;

  constructor(page: Page) {
    super(page);
    this.posts = page.locator('.post');
  }

  async navigate() {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
    await loginPage.fillCredentials('demo.account@mail.com', '12345678');
    await loginPage.loginButton.click();
  }

  async waitPostsLoaded() {
    await this.page.waitForSelector('.post');
  }

  async expectPosts({ count }: { count: number }) {
    const value = await this.posts.count();
    await expect(value).toEqual(count);
  }
}
