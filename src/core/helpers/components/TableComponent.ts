import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { expect, Locator, Page } from "@playwright/test";

export class TableComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Returns all table rows
   */
  // rows(): Locator {
  //     return this.locator.locator("tbody tr");
  // }

  // /**
  //  * Returns total row count
  //  */
  // async rowCount(): Promise<number> {
  //     return await this.rows().count();
  // }

  /**
   * Returns all columns
   */
  columns(): Locator {
    return this.locator.locator("thead th");
  }

  /**
   * Returns total column count
   */
  async columnCount(): Promise<number> {
    return await this.columns().count();
  }

  /**
   * Returns specific row
   */
  row(index: number): Locator {
    return this.rows().nth(index);
  }

  /**
   * Returns cell locator
   */
  cell(row: number, column: number): Locator {
    return this.row(row).locator("td").nth(column);
  }

  /**
   * Returns cell text
   */
  async cellText(row: number, column: number): Promise<string> {
    return await this.cell(row, column).innerText();
  }

  // /**
  //  * Click specific row
  //  */
  // async clickRow(index: number): Promise<void> {
  //     await this.row(index).click();
  // }

  /**
   * Click specific cell
   */
  async clickCell(row: number, column: number): Promise<void> {
    await this.cell(row, column).click();
  }

  /**
   * Returns entire row text
   */
  async rowText(row: number): Promise<string[]> {
    return await this.row(row).locator("td").allInnerTexts();
  }

  /**
   * Returns true if row contains text
   */
  async containsRow(text: string): Promise<boolean> {
    const count = await this.rows()
      .filter({
        hasText: text,
      })
      .count();

    return count > 0;
  }

  /**
   * Verify text exists anywhere in table
   */
  public async verifyContainsText(text: string): Promise<void> {
    await this.assertions.containsText(this.locator, text);
  }

  /**
   * Verify table has no records
   */
  public async verifyNoRecords(): Promise<void> {
    await this.assertions.containsText(this.locator, "No Records Found");
  }

  /**
   * Verify table contains text
   */
  // public async verifyContainsText(text: string): Promise<void> {
  //     await this.assertions.containsText(
  //         this.locator,
  //         text
  //     );
  // }

  /**
   * Verify No Records
   */
  // public async verifyNoRecords(): Promise<void> {
  //     await this.assertions.containsText(
  //         this.locator,
  //         "No Records Found"
  //     );
  // }

  /**
   * Total Rows
   */
  public async rowCount(): Promise<number> {
    return await this.locator.locator(".oxd-table-body .oxd-table-row").count();
  }

  /**
   * Header Names
   */
  public async headers(): Promise<string[]> {
    return await this.locator.locator(".oxd-table-header .oxd-table-cell").allTextContents();
  }

  /**
   * Click Row
   */
  public async clickRow(index: number): Promise<void> {
    await this.locator.locator(".oxd-table-body .oxd-table-row").nth(index).click();
  }

  public async getHeaders(): Promise<string[]> {
    await this.page.waitForSelector(".oxd-table-header", {
      state: "visible",
    });

    const headers = await this.locator.locator(".oxd-table-header-cell").allTextContents();

    return headers.map((header) => header.trim()).filter((header) => header.length > 0);
  }

  public async verifyHeaders(expectedHeaders: string[]): Promise<void> {
    const actualHeaders = await this.getHeaders();

    console.log("Actual Headers:", actualHeaders);

    expect(actualHeaders).toEqual(expectedHeaders);
  }

  /**
   * Returns all rows
   */
  public rows(): Locator {
    return this.locator.locator(".oxd-table-body .oxd-table-row");
  }

  /**
   * Find row containing text
   */
  public rowContaining(text: string): Locator {
    return this.rows().filter({
      hasText: text,
    });
  }

  public isTextPresent(text: string): Promise<boolean> {
    return this.locator
      .locator(".oxd-table-body .oxd-table-row")
      .filter({
        hasText: text,
      })
      .count()
      .then((count) => count > 0);
  }
}
