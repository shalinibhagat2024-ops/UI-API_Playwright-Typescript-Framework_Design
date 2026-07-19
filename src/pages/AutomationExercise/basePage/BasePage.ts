import { UiAssertions } from "@core/assertions/UiAssertions";
import { WaitHelper } from "@core/helpers/WaitHelper";
import { UIManager } from "@core/managers/UIManager";
import { Page } from "@playwright/test";

export abstract class BasePage {
  protected readonly ui: UIManager;
  protected readonly waits: WaitHelper;
  protected readonly assertions: UiAssertions;

  constructor(protected readonly page: Page) {
    this.ui = new UIManager(page);
    this.waits = new WaitHelper(page);
    this.assertions = new UiAssertions(page);
  }

  protected async navigate(baseUrl: string, route: string): Promise<void> {
    const url = `${baseUrl}${route}`;
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
    });
  }

  async refresh(): Promise<void> {
    await this.page.reload();
  }

  async title(): Promise<string> {
    return await this.page.title();
  }

  async currentUrl(): Promise<string> {
    return this.page.url();
  }

  protected async waitForPageLoad(): Promise<void> {
    await this.waits.networkIdle();
  }

  protected async waitForDomLoad(): Promise<void> {
    await this.waits.domLoaded();
  }

  protected async reloadPage(): Promise<void> {
    await this.page.reload();
    await this.waits.networkIdle();
  }
}
