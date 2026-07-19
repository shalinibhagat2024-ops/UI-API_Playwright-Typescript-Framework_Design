import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { expect, Locator, Page } from "@playwright/test";

export class DatePickerComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  async selectDate(year: string, month: string, day: string): Promise<void> {
    await this.locator.click();

    await this.page.locator(".react-datepicker__year-select").selectOption(year);

    await this.page.locator(".react-datepicker__month-select").selectOption(month);

    await this.page
      .locator(
        `.react-datepicker__day:not(.react-datepicker__day--outside-month):text-is("${day}")`
      )
      .click();
  }

  async verifyValue(expected: string): Promise<void> {
    await expect(this.locator).toHaveValue(expected);
  }
}
