import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class CalendarComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Enter date
   */
  public async enter(date: string): Promise<void> {
    await this.actions.fill(this.locator, date);
  }

  /**
   * Clear date
   */
  public async clear(): Promise<void> {
    await this.actions.clear(this.locator);
  }

  /**
   * Get date value
   */
  public async value(): Promise<string> {
    return await this.locator.inputValue();
  }

  /**
   * Verify date value
   */
  public async verifyValue(expected: string): Promise<void> {
    await this.assertions.value(this.locator, expected);
  }
}

// import { Locator, Page } from "@playwright/test";
// import { BaseComponent } from "./BaseComponent";

// export class CalendarComponent extends BaseComponent {

//     constructor(
//         page: Page,
//         locator: Locator
//     ) {
//         super(page, locator);
//     }

//     /**
//      * Set date for native HTML date picker
//      */
//     async setDate(date: string): Promise<void> {

//         await this.actions.fill(
//             this.locator,
//             date
//         );

//     }

//     /**
//      * Click calendar input
//      */
//     async open(): Promise<void> {

//         await this.click();

//     }

//     /**
//      * Select day from opened calendar
//      */
//     async selectDay(day: string): Promise<void> {

//         await this.page
//             .getByText(day, { exact: true })
//             .click();

//     }

//     /**
//      * Select month
//      */
//     async selectMonth(month: string): Promise<void> {

//         await this.page
//             .locator(".react-datepicker__month-select")
//             .selectOption({ label: month });

//     }

//     /**
//      * Select year
//      */
//     async selectYear(year: string): Promise<void> {

//         await this.page
//             .locator(".react-datepicker__year-select")
//             .selectOption({ label: year });

//     }

//     /**
//      * Complete date selection
//      */
//     async selectDate(
//         year: string,
//         month: string,
//         day: string
//     ): Promise<void> {

//         await this.open();

//         await this.selectYear(year);

//         await this.selectMonth(month);

//         await this.selectDay(day);

//     }

//     /**
//      * Get selected value
//      */
//     async value(): Promise<string> {

//         return await this.locator.inputValue();

//     }

//     /**
//      * Verify selected date
//      */
//     async verifyValue(expected: string): Promise<void> {

//         await this.assertions.value(
//             this.locator,
//             expected
//         );

//     }

// }
