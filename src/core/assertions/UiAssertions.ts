import { expect, Locator, Page } from "@playwright/test";

export class UiAssertions {
  constructor(private readonly page: Page) {}

  async visible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async hidden(locator: Locator): Promise<void> {
    await expect(locator).toBeHidden();
  }

  async enabled(locator: Locator): Promise<void> {
    await expect(locator).toBeEnabled();
  }

  async disabled(locator: Locator): Promise<void> {
    await expect(locator).toBeDisabled();
  }

  async checked(locator: Locator): Promise<void> {
    await expect(locator).toBeChecked();
  }

  async unchecked(locator: Locator): Promise<void> {
    await expect(locator).not.toBeChecked();
  }

  async text(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveText(expected);
  }

  async containsText(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toContainText(expected.trim());
  }

  async value(locator: Locator, expected: string): Promise<void> {
    await expect(locator).toHaveValue(expected);
  }

  async count(locator: Locator, expected: number): Promise<void> {
    await expect(locator).toHaveCount(expected);
  }

  async url(expected: string): Promise<void> {
    await expect(this.page).toHaveURL(expected);
  }

  async title(expected: string): Promise<void> {
    await expect(this.page).toHaveTitle(expected);
  }

  public async notContainsText(locator: Locator, text: string): Promise<void> {
    await expect(locator).not.toContainText(text);
  }
}
