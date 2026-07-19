import { expect, Locator, Page } from "@playwright/test";

export class WaitHelper {
  constructor(private readonly page: Page) {}

  /**
   * Wait until element is visible
   */
  async visible(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: "visible", timeout });
  }

  /**
   * Wait until element is hidden
   */
  async hidden(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: "hidden", timeout });
  }

  /**
   * Wait until attached
   */
  async attached(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: "attached", timeout });
  }

  /**
   * Wait until detached
   */
  async detached(locator: Locator, timeout: number = 30000): Promise<void> {
    await locator.waitFor({ state: "detached", timeout });
  }

  /**
   * Wait until enabled
   */
  async enabled(locator: Locator, timeout: number = 30000): Promise<void> {
    await expect(locator).toBeEnabled({ timeout });
  }

  /**
   * Wait until disabled
   */
  async disabled(locator: Locator, timeout: number = 30000): Promise<void> {
    await expect(locator).toBeDisabled({ timeout });
  }

  /**
   * Wait for URL
   */
  async urlContains(value: string, timeout: number = 30000): Promise<void> {
    await this.page.waitForURL(`**${value}**`, { timeout });
  }

  /**
   * Wait for page load
   */
  async pageLoad(): Promise<void> {
    await this.page.waitForLoadState("load");
  }

  /**
   * Wait for DOM
   */
  async domLoaded(): Promise<void> {
    await this.page.waitForLoadState("domcontentloaded");
  }

  /**
   * Wait for Network Idle with a safe fallback
   */
  async networkIdle(timeout: number = 10000): Promise<void> {
    try {
      await this.page.waitForLoadState("networkidle", { timeout });
    } catch {
      await this.page
        .waitForLoadState("load", { timeout: Math.min(timeout, 5000) })
        .catch(() => undefined);
    }
  }

  /**
   * Small explicit wait
   */
  async sleep(milliseconds: number): Promise<void> {
    await this.page.waitForTimeout(milliseconds);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
  }

  async waitForVisible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "visible",
    });
  }

  async waitForHidden(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: "hidden",
    });
  }

  async wait(milliseconds: number): Promise<void> {
    await this.page.waitForTimeout(milliseconds);
  }
}
