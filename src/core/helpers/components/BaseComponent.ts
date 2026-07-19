import { UiAssertions } from "@core/assertions/UiAssertions";
import { ElementActions } from "@core/helpers/actions/ElementActions";
import { WaitHelper } from "@core/helpers/WaitHelper";
import { Locator, Page } from "@playwright/test";

export abstract class BaseComponent {
  protected readonly actions: ElementActions;

  protected readonly waits: WaitHelper;

  protected readonly assertions: UiAssertions;

  constructor(
    protected readonly page: Page,
    protected readonly locator: Locator
  ) {
    this.actions = new ElementActions(page);

    this.waits = new WaitHelper(page);

    this.assertions = new UiAssertions(page);
  }

  async click(): Promise<void> {
    await this.actions.click(this.locator);
  }

  async hover(): Promise<void> {
    await this.actions.hover(this.locator);
  }

  async isVisible(): Promise<void> {
    await this.assertions.visible(this.locator);
  }

  async scrollIntoView(): Promise<void> {
    await this.actions.scrollIntoView(this.locator);
  }

  async getText(): Promise<string> {
    return (await this.locator.textContent()) ?? "";
  }
}
