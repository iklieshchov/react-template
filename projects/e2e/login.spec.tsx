import { test } from '@playwright/test';
import { LoginPage } from './page-objects/login.page-obj';

test.describe('User Login', () => {
  test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillCredentials('demo.account@mail.com', '12345678');
    await loginPage.loginButton.click();
    await loginPage.expectLoginSuccess();
    await page.close();
  });

  test('Validation: Invalid email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillCredentials('demo.account', '12345678');
    await loginPage.loginButton.click();
    await loginPage.expectInvalidEmailField();
    await page.close();
  });

  test('Validation: Invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.fillCredentials('demo.account@mail.com', '123');
    await loginPage.loginButton.click();
    await loginPage.expectInvalidPasswordField();
    await page.close();
  });
});
