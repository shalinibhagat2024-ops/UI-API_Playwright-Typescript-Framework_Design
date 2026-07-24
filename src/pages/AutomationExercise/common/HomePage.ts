import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { EnvironmentManager } from "@core/config/EnvironmentManager";
import { Logger } from "@core/logger/Logger";
import { Locator, Page } from "@playwright/test";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class HomePage extends BasePage {
  private readonly lnkSignupLogin: Locator;
  private readonly lnkProducts: Locator;
  private readonly lnkCart: Locator;
  private readonly lblLoggedInAs: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);

    this.lnkSignupLogin = page.locator("a[href='/login']");
    this.lnkProducts = page.locator("header").getByRole("link", {
      name: /^Products$/i,
    });
    this.lnkCart = page.locator("a[href='/view_cart']");
    this.lblLoggedInAs = page.locator("li").filter({ hasText: "Logged in as" });
    this.logoutLink = page.locator("a[href='/logout']");
  }

  /**
   * Open Home Page
   */
  public async open(): Promise<void> {
    Logger.info("Opening Automation Exercise Home Page.");
    await this.navigate(EnvironmentManager.getBaseUrl(), ApplicationRoutes.automationExercise.home);
  }

  /**
   * Navigate to Login
   */
  public async openLogin(): Promise<void> {
    Logger.info("Opening Login Page.");
    if (await this.logoutLink.isVisible()) {
      Logger.info("User is already logged in. Logging out...");
      await this.logoutLink.click();
    }
    await this.ui.button(this.lnkSignupLogin).click();
  }

  /**
   * Navigate to Products
   */
  public async openProducts(): Promise<void> {
    Logger.info("Opening Products.");
    await this.ui.button(this.lnkProducts).click();
  }

  /**
   * Navigate to Cart
   */
  public async openCart(): Promise<void> {
    Logger.info("Opening Cart.");
    await this.ui.button(this.lnkCart).click();
  }

  /**
   * Verify Logged In User
   */
  public async verifyLoggedInUser(name: string): Promise<void> {
    await this.assertions.containsText(this.lblLoggedInAs, name);
  }
}
