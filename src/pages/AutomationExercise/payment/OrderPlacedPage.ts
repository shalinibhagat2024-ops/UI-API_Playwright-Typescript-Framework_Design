import { Logger } from "@core/logger/Logger";
import { Locator, Page } from "@playwright/test";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class OrderPlacedPage extends BasePage {
  private readonly lblOrderPlaced: Locator;
  private readonly btnContinue: Locator;

  constructor(page: Page) {
    super(page);
    this.lblOrderPlaced = page.locator("[data-qa='order-placed']");
    this.btnContinue = page.locator("[data-qa='continue-button']");
  }

  public async verifyOrderPlaced(): Promise<void> {
    Logger.info("Verifying Order Placed.");
    await this.assertions.containsText(this.lblOrderPlaced, "Order Placed!");
  }

  public async continue(): Promise<void> {
    await this.ui.button(this.btnContinue).click();
  }
}
