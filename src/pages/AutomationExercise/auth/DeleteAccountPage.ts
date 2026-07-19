import { Locator, Page } from "@playwright/test";

import { BasePage } from "../basePage/BasePage";

export class DeleteAccountPage extends BasePage {
  private readonly lblAccountDeleted: Locator;
  private readonly btnContinue: Locator;

  constructor(page: Page) {
    super(page);

    this.lblAccountDeleted = this.page.getByText("ACCOUNT DELETED!");
    this.btnContinue = this.page.locator("[data-qa='continue-button']");
  }

  public async verifyDeleted(): Promise<void> {
    await this.assertions.visible(this.lblAccountDeleted);
  }

  public async continue(): Promise<void> {
    await this.ui.button(this.btnContinue).click();
  }
}
