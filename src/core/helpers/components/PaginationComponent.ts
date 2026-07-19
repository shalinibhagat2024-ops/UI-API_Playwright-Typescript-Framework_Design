import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class PaginationComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  async next(): Promise<void> {
    await this.page.getByLabel("Next").click();
  }

  async previous(): Promise<void> {
    await this.page.getByLabel("Previous").click();
  }

  async pagination(): Promise<void> {
    await this.locator.waitFor({ state: "visible" });
  }

  // Property 'hasPage' does not exist on type '() => Promise<void>'. ts(2339)
  // TODO: Investigate the cause instead of using 'any'.

  async hasPage(pageNumber: number): Promise<boolean> {
    const pageLocator = this.page.locator(`.page-item >> text=${pageNumber}`);
    return await pageLocator.isVisible();
  }
}
