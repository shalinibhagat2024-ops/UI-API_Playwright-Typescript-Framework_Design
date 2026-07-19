import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class ToastShowcasePage extends BasePage {
  readonly timerAlertButton = this.ui.button(this.page.locator("#timerAlertButton"));
  readonly alertText = this.page.locator(".alert");
  readonly toast = this.ui.toast(this.alertText);

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.alerts);
  }

  async triggerToast(): Promise<void> {
    await this.timerAlertButton.click();
  }
}
