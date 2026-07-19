import { BrowserContext, Page } from "@playwright/test";

export class BrowserManager {
  constructor(private readonly page: Page) {}

  /**
   * Returns current page.
   */
  public getPage(): Page {
    return this.page;
  }

  /**
   * Returns browser context.
   */
  public getContext(): BrowserContext {
    return this.page.context();
  }

  /**
   * Refresh page.
   */
  public async refresh(): Promise<void> {
    await this.page.reload();
  }

  /**
   * Navigate back.
   */
  public async back(): Promise<void> {
    await this.page.goBack();
  }

  /**
   * Navigate forward.
   */
  public async forward(): Promise<void> {
    await this.page.goForward();
  }

  /**
   * Close current page.
   */
  public async close(): Promise<void> {
    await this.page.close();
  }
}
