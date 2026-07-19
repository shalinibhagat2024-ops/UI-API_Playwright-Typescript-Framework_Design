import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class DropdownComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  /**
   * Native HTML Select - Visible Text
   */
  public async selectByLabel(label: string): Promise<void> {
    await this.waits.visible(this.locator);
    await this.locator.selectOption({ label });
  }

  /**
   * Native HTML Select - Value
   */
  public async selectByValue(value: string): Promise<void> {
    await this.waits.visible(this.locator);
    await this.locator.selectOption({ value });
  }

  /**
   * Native HTML Select - Index
   */
  public async selectByIndex(index: number): Promise<void> {
    await this.waits.visible(this.locator);
    await this.locator.selectOption({ index });
  }

  /**
   * Custom Dropdown (OrangeHRM, React, Angular)
   */
  public async selectCustom(text: string): Promise<void> {
    await this.waits.visible(this.locator);
    await this.locator.click();
    await this.page.getByText(text, { exact: true }).click();
  }

  /**
   * Selected Text
   */
  public async selectedText(): Promise<string> {
    return await this.locator.evaluate((element) => {
      if (element instanceof HTMLSelectElement) {
        return element.options[element.selectedIndex].text;
      }

      return element.textContent ?? "";
    });
  }
}

//Native HTML <select> → selectByLabel(), selectByValue(), selectByIndex()
//Custom UI dropdowns (React, Angular, OrangeHRM) → selectCustom()

// export class DropdownComponent extends BaseComponent {

//     constructor(
//         page: Page,
//         locator: Locator
//     ) {
//         super(page, locator);
//     }

//     /**
//      * Select dropdown value
//      */
//     public async select(
//         value: string
//     ): Promise<void> {

//         await this.locator.scrollIntoViewIfNeeded();

//         await this.locator.click();

//         const option = this.page

//             .locator(".oxd-select-option")

//             .getByText(value, {

//                 exact: true

//             });

//         await option.waitFor({

//             state: "visible"

//         });

//         await option.click();

//     }

//     /**
//      * Select First Option
//      */
//     public async selectFirst(): Promise<void> {

//         await this.locator.click();

//         await this.page

//             .locator(".oxd-select-option")

//             .first()

//             .click();

//     }

//     /**
//      * Select Last Option
//      */
//     public async selectLast(): Promise<void> {

//         await this.locator.click();

//         await this.page

//             .locator(".oxd-select-option")

//             .last()

//             .click();

//     }

//     /**
//      * Get Selected Value
//      */
//     public async getSelectedValue(): Promise<string> {

//         return (

//             await this.locator.textContent()

//         )?.trim() ?? "";

//     }

//     /**
//      * Verify Selected Value
//      */
//     public async verifySelected(
//         expected: string
//     ): Promise<void> {

//         const actual =
//             await this.getSelectedValue();

//         if (actual !== expected) {

//             throw new Error(

//                 `Expected "${expected}" but found "${actual}".`

//             );

//         }

//     }

// }
