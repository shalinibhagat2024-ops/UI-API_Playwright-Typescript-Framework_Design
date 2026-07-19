import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { expect, Locator, Page } from "@playwright/test";

export class ToastComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Verify Success Toast
   */
  public async verifySuccess(message: string): Promise<void> {
    await expect(this.locator).toContainText(message, {
      timeout: 15000,
    });
  }

  /**
   * Verify Error Toast
   */
  public async verifyError(message: string): Promise<void> {
    await expect(this.locator).toContainText(message, {
      timeout: 15000,
    });
  }
  public async waitForToast(): Promise<void> {
    await this.locator.waitFor({ state: "visible", timeout: 15000 });
  }
  async verifyContains(expectedText: string): Promise<void> {
    await expect(this.locator).toContainText(expectedText);
  }
}
