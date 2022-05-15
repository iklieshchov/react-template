import { Page, Route } from '@playwright/test';

export type URLMatch = Parameters<Page['route']>[0];
export type FulfillOptions = Parameters<Route['fulfill']>[0];

export const mockNetwork = (match: URLMatch, options: FulfillOptions) => async (page: Page) => {
  await page.route(match, (route) => {
    route.fulfill(options);
  });
};

export const jsonResponse = (url: URLMatch, json: any) => mockNetwork(url, {
  status: 200,
  contentType: 'application/json',
  body: JSON.stringify(json),
});
