import { Logger } from "@core/logger/Logger";
import { Locator, Page } from "@playwright/test";
import { Payment } from "src/models/Payment";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class PaymentPage extends BasePage {
  private readonly txtNameOnCard: Locator;
  private readonly txtCardNumber: Locator;
  private readonly txtCVC: Locator;
  private readonly txtExpiryMonth: Locator;
  private readonly txtExpiryYear: Locator;
  private readonly btnPayAndConfirmOrder: Locator;

  constructor(page: Page) {
    super(page);
    this.txtNameOnCard = page.locator("[data-qa='name-on-card']");
    this.txtCardNumber = page.locator("[data-qa='card-number']");
    this.txtCVC = page.locator("[data-qa='cvc']");
    this.txtExpiryMonth = page.locator("[data-qa='expiry-month']");
    this.txtExpiryYear = page.locator("[data-qa='expiry-year']");
    this.btnPayAndConfirmOrder = page.locator("[data-qa='pay-button']");
  }

  public async verifyOpened(): Promise<void> {
    await this.assertions.visible(this.btnPayAndConfirmOrder);
  }

  public async pay(payment: Payment): Promise<void> {
    Logger.info("Entering payment details.");
    await this.ui.textbox(this.txtNameOnCard).enter(payment.nameOnCard);
    await this.ui.textbox(this.txtCardNumber).enter(payment.cardNumber);
    await this.ui.textbox(this.txtCVC).enter(payment.cvc);
    await this.ui.textbox(this.txtExpiryMonth).enter(payment.expiryMonth);
    await this.ui.textbox(this.txtExpiryYear).enter(payment.expiryYear);
    Logger.info("Confirming payment.");
    await this.ui.button(this.btnPayAndConfirmOrder).click();
  }
}
