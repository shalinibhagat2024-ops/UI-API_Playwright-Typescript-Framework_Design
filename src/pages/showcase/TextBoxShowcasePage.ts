import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class TextBoxShowcasePage extends BasePage {
  readonly fullName = this.ui.textbox(this.page.getByPlaceholder("Full Name"));

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.textBox);
  }

  async enterFullName(value: string): Promise<void> {
    await this.fullName.enter(value);
  }

  async verifyFullName(value: string): Promise<void> {
    await this.fullName.verifyValue(value);
  }
}
