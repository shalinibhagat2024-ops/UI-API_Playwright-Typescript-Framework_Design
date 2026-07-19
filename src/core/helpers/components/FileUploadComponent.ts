import { BaseComponent } from "@core/helpers/components/BaseComponent";
import { Locator, Page } from "@playwright/test";

export class FileUploadComponent extends BaseComponent {
  constructor(page: Page, locator: Locator) {
    super(page, locator);
  }

  async upload(filePath: string): Promise<void> {
    await this.locator.setInputFiles(filePath);
  }

  async clear(): Promise<void> {
    await this.locator.setInputFiles([]);
  }
}

// import { Locator, Page } from "@playwright/test";
// import { BaseComponent } from "./BaseComponent";

// export class FileUploadComponent extends BaseComponent {
//   constructor(page: Page, locator: Locator) {
//     super(page, locator);
//   }

//   /**
//    * Upload Single File
//    */
//   async upload(filePath: string): Promise<void> {
//     await this.locator.setInputFiles(filePath);
//   }

//   /**
//    * Upload Multiple Files
//    */
//   async uploadMultiple(filePaths: string[]): Promise<void> {
//     await this.locator.setInputFiles(filePaths);
//   }

//   /**
//    * Remove Uploaded Files
//    */
//   async clear(): Promise<void> {
//     await this.locator.setInputFiles([]);
//   }

//   /**
//    * Verify uploaded file name
//    */
//   async verifyFileName(expected: string): Promise<void> {
//     await this.assertions.containsText(this.locator, expected);
//   }
// }
