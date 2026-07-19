import { Logger } from "@core/logger/Logger";
import { expect, Locator, Page } from "@playwright/test";

import { BasePage } from "../basePage/BasePage";

export class Header extends BasePage {
  private readonly lblLoggedInAs: Locator;
  private readonly lnkLogout: Locator;
  private readonly lnkDeleteAccount: Locator;
  private readonly lnkCart: Locator;

  constructor(page: Page) {
    super(page);
    this.lblLoggedInAs = page.locator("li").filter({
      hasText: "Logged in as",
    });
    this.lnkLogout = page.locator("a[href='/logout']");
    this.lnkDeleteAccount = page.locator("a[href='/delete_account']");
    this.lnkCart = this.page.locator("a[href='/view_cart']").first();
  }

  public async verifyLoggedIn(name: string): Promise<void> {
    const loggedInText = `Logged in as ${name}`;
    await this.assertions.containsText(this.lblLoggedInAs, loggedInText);
  }

  public async logout(): Promise<void> {
    await this.ui.button(this.lnkLogout).click();
  }

  public async deleteAccount(): Promise<void> {
    await this.ui.button(this.lnkDeleteAccount).click();
    await this.waits.networkIdle(10000);
    await this.waits.pageLoad();
  }

  public async openCart(): Promise<void> {
    Logger.info("Opening Cart.");
    await this.ui.button(this.lnkCart).click();
    await expect(this.page).toHaveURL(/view_cart/);
  }
}
