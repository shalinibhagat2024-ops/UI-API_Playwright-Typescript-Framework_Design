import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class RadioButtonComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Check radio button
   */
  public async check(): Promise<void> {
    await this.click();
  }

  /**
   * Select radio button
   */
  public async select(): Promise<void> {
    await this.click();
  }

  /**
   * Returns selection status
   */
  public async isSelected(): Promise<boolean> {
    return await this.locator.isChecked();
  }

  /**
   * Verify selected
   */
  public async verifySelected(): Promise<void> {
    await this.assertions.checked(this.locator);
  }

  /**
   * Verify not selected
   */
  public async verifyNotSelected(): Promise<void> {
    await this.assertions.unchecked(this.locator);
  }

  /**
   * Toggle selection
   */
  public async toggle(): Promise<void> {
    await this.click();
  }
}
