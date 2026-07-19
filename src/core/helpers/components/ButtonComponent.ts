import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class ButtonComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Single Click
   */
  async click(): Promise<void> {
    await super.click();
  }

  /**
   * Double Click
   */
  async doubleClick(): Promise<void> {
    await this.actions.doubleClick(this.locator);
  }

  /**
   * Right Click
   */
  async rightClick(): Promise<void> {
    await this.actions.rightClick(this.locator);
  }

  /**
   * Verify Button Text
   */
  async verifyText(expected: string): Promise<void> {
    await this.assertions.text(this.locator, expected);
  }

  /**
   * Verify Button Enabled
   */
  async verifyEnabled(): Promise<void> {
    await this.assertions.enabled(this.locator);
  }

  /**
   * Verify Button Disabled
   */
  async verifyDisabled(): Promise<void> {
    await this.assertions.disabled(this.locator);
  }
}
