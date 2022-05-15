import { test } from '@playwright/test';
import { DashboardPage } from './page-objects/dashboard.page-obj';
import { singlePostInList } from './page-objects/dashboard.mocks';

test.describe('Dashboard', () => {
  test('check posts', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.mockNetwork(
      singlePostInList,
    );
    await dashboardPage.navigate();
    await dashboardPage.waitPostsLoaded();
    await dashboardPage.expectPosts({ count: 1 });
    await page.close();
  });
});
