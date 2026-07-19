import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class DropdownShowcasePage extends BasePage {
  readonly oldStyleDropdown = this.ui.dropdown(this.page.locator("#oldSelectMenu"));

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.selectMenu);
  }

  async selectPurple(): Promise<void> {
    await this.oldStyleDropdown.selectedText();
  }
}
