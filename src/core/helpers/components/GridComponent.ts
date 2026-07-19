import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class GridComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  async rowCount(): Promise<number> {
    return await this.locator.locator("tr").count();
  }

  async columnCount(): Promise<number> {
    return await this.locator.locator("td").count();
  }

  async containsRow(text: string): Promise<boolean> {
    return (
      (await this.locator
        .locator(".rt-tr-group")
        .filter({
          hasText: text,
        })
        .count()) > 0
    );
  }
}
