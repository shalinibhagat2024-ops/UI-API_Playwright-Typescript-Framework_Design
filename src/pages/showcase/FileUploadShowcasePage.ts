import { ApplicationRoutes } from "@core/config/ApplicationRoutes";
import { Page } from "@playwright/test";

import { BasePage } from "../AutomationExercise/basePage/BasePage";

export class FileUploadShowcasePage extends BasePage {
  readonly uploadInput = this.ui.upload(this.page.locator("#uploadFile"));
  readonly uploadedFile = this.page.locator("#uploadedFilePath");

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.navigate(ApplicationRoutes.demoqa.baseUrl, ApplicationRoutes.demoqa.uploadDownload);
  }

  async uploadSampleFile(filePath: string): Promise<void> {
    await this.uploadInput.upload(filePath);
  }

  async verifyUploadedFile(expected: string): Promise<void> {
    await this.assertions.containsText(this.uploadedFile, expected);
  }
}
