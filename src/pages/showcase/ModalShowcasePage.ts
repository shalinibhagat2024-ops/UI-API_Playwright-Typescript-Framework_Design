import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class ModalShowcasePage extends BasePage {
  readonly openModalButton = this.ui.button(
    this.page.getByRole("button", {
      name: "Small modal",
    })
  );

  readonly modal = this.ui.modal(this.page.locator(".modal-content"));
  readonly closeButton = this.page.getByRole("button", {
    name: "Close",
  });

  async title(): Promise<string> {
    return (await this.page.locator("#example-modal-sizes-title-sm").textContent()) ?? "";
  }

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.modalDialogs);
  }

  async openSmallModal(): Promise<void> {
    await this.openModalButton.click();
    await this.modal.open();
  }

  async closeModal(): Promise<void> {
    await this.modal.close();
  }
}
