import { WaitHelper } from "@core/helpers/WaitHelper";
import { Locator, Page } from "@playwright/test";

export class ElementActions {
  private readonly waits: WaitHelper;

  constructor(private readonly page: Page) {
    this.waits = new WaitHelper(page);
  }

  /**
   * Click
   */
  async click(locator: Locator): Promise<void> {
    await this.waits.visible(locator);
    await this.waits.enabled(locator);
    await locator.click();
  }

  /**
   * Fill
   */
  async fill(locator: Locator, value: string): Promise<void> {
    await this.waits.visible(locator);

    await locator.fill(value);
  }

  /**
   * Clear
   */
  async clear(locator: Locator): Promise<void> {
    await this.waits.visible(locator);
    await locator.clear();
  }

  /**
   * Type
   */
  async type(locator: Locator, value: string): Promise<void> {
    await this.waits.visible(locator);

    await locator.fill(value);
  }

  /**
   * Hover
   */
  async hover(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.hover();
  }

  /**
   * Double Click
   */
  async doubleClick(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.dblclick();
  }

  /**
   * Right Click
   */
  async rightClick(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.click({
      button: "right",
    });
  }

  /**
   * Check
   */
  async check(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.check();
  }

  /**
   * Uncheck
   */
  async uncheck(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.uncheck();
  }

  /**
   * Focus
   */
  async focus(locator: Locator): Promise<void> {
    await this.waits.visible(locator);

    await locator.focus();
  }

  /**
   * Scroll Into View
   */
  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }
}
