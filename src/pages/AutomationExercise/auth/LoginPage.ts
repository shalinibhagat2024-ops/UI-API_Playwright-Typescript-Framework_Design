import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { EnvironmentManager } from "@core/config/EnvironmentManager";
import { Logger } from "@core/logger/Logger";
import { Locator, Page } from "@playwright/test";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class LoginPage extends BasePage {
  // Login
  private readonly txtLoginEmail: Locator;
  private readonly txtLoginPassword: Locator;
  private readonly btnLogin: Locator;

  // Signup
  private readonly txtSignupName: Locator;
  private readonly txtSignupEmail: Locator;
  private readonly btnSignup: Locator;
  private readonly lblLoginHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.txtLoginEmail = page.locator("[data-qa='login-email']");
    this.txtLoginPassword = page.locator("[data-qa='login-password']");
    this.btnLogin = page.locator("[data-qa='login-button']");
    this.txtSignupName = page.locator("[data-qa='signup-name']");
    this.txtSignupEmail = page.locator("[data-qa='signup-email']");
    this.btnSignup = page.locator("[data-qa='signup-button']");
    this.lblLoginHeader = page.getByText("Login to your account");
  }

  /**
   * Open Login Page
   */
  public async open(): Promise<void> {
    Logger.info("Opening Login Page.");
    await this.navigate(
      EnvironmentManager.getBaseUrl(),
      ApplicationRoutes.automationExercise.login
    );
  }

  public async loginAsAdmin(): Promise<void> {
    await this.login(EnvironmentManager.getAdminUsername(), EnvironmentManager.getAdminPassword());
  }

  /**
   * Login
   */
  public async login(email: string, password: string): Promise<void> {
    Logger.info(`Logging in using ${email}`);
    await this.ui.textbox(this.txtLoginEmail).enter(email);
    await this.ui.textbox(this.txtLoginPassword).enter(password);
    await this.ui.button(this.btnLogin).click();
    await this.waits.networkIdle();
  }

  /**
   * Open Signup
   */
  public async startSignup(name: string, email: string): Promise<void> {
    Logger.info("Starting Signup.");
    await this.ui.textbox(this.txtSignupName).enter(name);
    await this.ui.textbox(this.txtSignupEmail).enter(email);
    await this.ui.button(this.btnSignup).click();
    await this.waits.networkIdle();
  }

  /**
   * Verify Page Loaded
   */
  public async verifyLoaded(): Promise<void> {
    await this.assertions.visible(this.lblLoginHeader);
  }
}
