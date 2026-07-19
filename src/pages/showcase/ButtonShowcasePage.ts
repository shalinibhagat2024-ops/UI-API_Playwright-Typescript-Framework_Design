import { ApplicationRoutes } from "@core/config/ApplicationRoutes";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class ButtonShowcasePage extends BasePage {
  readonly doubleClickButton = this.ui.button(
    this.page.getByRole("button", {
      name: "Double Click Me",
    })
  );

  readonly rightClickButton = this.ui.button(
    this.page.getByRole("button", {
      name: "Right Click Me",
    })
  );

  readonly clickButton = this.ui.button(
    this.page
      .getByRole("button", {
        name: "Click Me",
      })
      .last()
  );

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.buttons);
  }

  async performDoubleClick(): Promise<void> {
    await this.doubleClickButton.doubleClick();
  }

  async performRightClick(): Promise<void> {
    await this.rightClickButton.rightClick();
  }

  async performClick(): Promise<void> {
    await this.clickButton.click();
  }
}
