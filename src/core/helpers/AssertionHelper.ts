import { expect, Locator, Page } from "@playwright/test";

export class AssertionHelper {
  async verifyTitle(page: Page, title: string | RegExp): Promise<void> {
    await expect(page).toHaveTitle(title);
  }

  async verifyURL(page: Page, url: string | RegExp): Promise<void> {
    await expect(page).toHaveURL(url);
  }

  async verifyVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async verifyHidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async verifyEnabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  async verifyDisabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  async verifyText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  async verifyContainsText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toContainText(expected);
  }
}
