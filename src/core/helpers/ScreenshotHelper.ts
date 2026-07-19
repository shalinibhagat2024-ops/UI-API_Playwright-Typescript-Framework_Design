import { Logger } from "@core/logger/Logger";
import { Page } from "@playwright/test";
import fs from "fs";
import path from "path";

export class ScreenshotHelper {
  constructor(private readonly page: Page) {}

  /**
   * Capture full page screenshot.
   */
  async capture(name: string): Promise<string> {
    const directory = path.join(process.cwd(), "reports", "screenshots");

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, {
        recursive: true,
      });
    }

    const filePath = path.join(directory, `${name}.png`);

    await this.page.screenshot({
      path: filePath,
      fullPage: true,
    });

    Logger.info(`Screenshot saved: ${filePath}`);

    return filePath;
  }

  /**
   * Capture viewport screenshot.
   */
  async captureViewport(name: string): Promise<string> {
    const directory = path.join(process.cwd(), "reports", "screenshots");

    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, {
        recursive: true,
      });
    }

    const filePath = path.join(directory, `${name}.png`);

    await this.page.screenshot({
      path: filePath,
    });

    Logger.info(`Viewport screenshot saved: ${filePath}`);

    return filePath;
  }

  /**
   * Capture screenshot with timestamp.
   */
  async captureWithTimestamp(prefix: string): Promise<string> {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

    return this.capture(`${prefix}-${timestamp}`);
  }
}
