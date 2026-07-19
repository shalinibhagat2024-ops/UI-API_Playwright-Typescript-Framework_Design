import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class TextBoxComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Enter text
   */
  async enter(text: string): Promise<void> {
    await this.actions.fill(this.locator, text);
  }

  /**
   * Append text
   */
  async append(text: string): Promise<void> {
    await this.locator.pressSequentially(text);
  }

  /**
   * Clear textbox
   */
  async clear(): Promise<void> {
    await this.actions.clear(this.locator);
  }

  /**
   * Get value
   */
  async value(): Promise<string> {
    return await this.locator.inputValue();
  }

  /**
   * Verify value
   */
  async verifyValue(expected: string): Promise<void> {
    await this.assertions.value(this.locator, expected);
  }

  //Property 'fill' does not exist on type 'TextBoxComponent'.ts(2339)
  //any

  async fill(text: string): Promise<void> {
    await this.actions.fill(this.locator, text);
  }
}
