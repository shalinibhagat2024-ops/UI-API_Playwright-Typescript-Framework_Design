import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Locator, Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class RadioButtonShowcasePage extends BasePage {
  readonly yesRadio = this.ui.radio(this.page.locator("label[for='yesRadio']"));
  readonly impressiveRadio = this.ui.radio(this.page.locator("label[for='impressiveRadio']"));
  readonly noRadio = this.ui.radio(this.page.locator("label[for='noRadio']"));
  readonly result = this.page.locator(".text-success");

  constructor(page: Page) {
    super(page);
  }

  /**
   * Open Radio Button Page
   */
  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.radioButton);
  }

  /**
   * Select Yes
   */
  async selectYes(): Promise<void> {
    await this.yesRadio.select();
  }

  /**
   * Select Impressive
   */
  async selectImpressive(): Promise<void> {
    await this.impressiveRadio.select();
  }

  /**
   * Verify Selected Text
   */
  async verifySelection(expected: string): Promise<void> {
    await this.assertions.text(this.result, expected);
  }

  async verifySelectedText(result: Locator, expected: string): Promise<void> {
    await this.assertions.text(result, expected);
  }
}
