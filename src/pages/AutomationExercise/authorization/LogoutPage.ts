import { expect, Page } from "@playwright/test";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class LogoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators
  private readonly logoutLink = this.page.locator("a[href='/logout']");
  private readonly signupLoginLink = this.page.locator("a[href='/login']");
  private readonly loggedInUser = this.page.locator("a:has-text('Logged in as')");

  /**
   * Verify user is logged in
   */
  async verifyUserLoggedIn(): Promise<void> {
    await expect(this.loggedInUser).toBeVisible();
  }

  /**
   * Click Logout
   */
  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  /**
   * Verify redirected to Login page
   */
  async verifyLogoutSuccessful(): Promise<void> {
    await expect(this.signupLoginLink).toBeVisible();
    await expect(this.page).toHaveURL(/login/);
  }

  /**
   * Complete logout flow
   */
  async logoutAndVerify(): Promise<void> {
    await this.verifyUserLoggedIn();
    await this.logout();
    await this.verifyLogoutSuccessful();
  }
}
