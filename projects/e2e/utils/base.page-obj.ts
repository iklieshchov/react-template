import { Page } from '@playwright/test';

export type NetworkMock = (page: Page) => Promise<void>;

export class PageObject {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async mockNetwork(...mocks: NetworkMock[]) {
    await Promise.all(mocks.map((fn) => fn.apply(null, [this.page])));
  }

  async close() {
    await this.page.close();
  }
}
