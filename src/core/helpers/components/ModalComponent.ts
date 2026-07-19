import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class ModalComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  async verifyVisible(): Promise<void> {
    await this.assertions.visible(this.locator);
  }

  async close(): Promise<void> {
    await this.page.keyboard.press("Escape");
  }

  //Property 'verifyHidden' does not exist on type 'ModalComponent'.ts(2339)
  //any

  async verifyHidden(): Promise<void> {
    await this.assertions.hidden(this.locator);
  }

  //Property 'open' does not exist on type 'ModalComponent'.ts(2339)
  //any
  async open(): Promise<void> {
    await this.locator.waitFor({ state: "visible" });
  }
}

// import { Locator, Page } from "@playwright/test";
// import { BaseComponent } from "./BaseComponent";

// export class ModalComponent extends BaseComponent {
//   constructor(page: Page, locator: Locator) {
//     super(page, locator);
//   }

//   /**
//    * Wait until modal is displayed
//    */
//   async waitUntilVisible(): Promise<void> {
//     await this.locator.waitFor({ state: "visible" });
//   }

//   /**
//    * Wait until modal is displayed
//    */
//   async open(): Promise<void> {
//     await this.waitUntilVisible();
//   }

//   /**
//    * Close modal
//    */
//   async close(closeButton: Locator): Promise<void> {
//     await closeButton.click();
//   }

//   /**
//    * Returns modal title
//    */
//   async title(titleLocator: Locator): Promise<string> {
//     return (await titleLocator.textContent()) ?? "";
//   }

//   /**
//    * Returns modal body
//    */
//   async body(bodyLocator: Locator): Promise<string> {
//     return (await bodyLocator.textContent()) ?? "";
//   }

//   /**
//    * Verify modal displayed
//    */
//   async verifyVisible(): Promise<void> {
//     await this.assertions.visible(this.locator);
//   }

//   /**
//    * Verify modal hidden
//    */
//   async verifyHidden(): Promise<void> {
//     await this.assertions.hidden(this.locator);
//   }
// }
