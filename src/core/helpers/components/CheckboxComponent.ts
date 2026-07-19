import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class CheckboxComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Check checkbox
   */
  async check(): Promise<void> {
    await this.actions.check(this.locator);
  }

  /**
   * Uncheck checkbox
   */
  async uncheck(): Promise<void> {
    await this.actions.uncheck(this.locator);
  }

  /**
   * Toggle checkbox
   */
  async toggle(): Promise<void> {
    await this.click();
  }

  /**
   * Returns checked status
   */
  async isChecked(): Promise<boolean> {
    return await this.locator.isChecked();
  }

  /**
   * Verify checked
   */
  async verifyChecked(): Promise<void> {
    await this.assertions.checked(this.locator);
  }

  /**
   * Verify unchecked
   */
  async verifyUnchecked(): Promise<void> {
    await this.assertions.unchecked(this.locator);
  }
}
