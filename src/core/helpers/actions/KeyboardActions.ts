import { Page } from "@playwright/test";

export class KeyboardActions {
  constructor(private readonly page: Page) {}

  /**
   * Press any key
   */
  async press(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  /**
   * Type text
   */
  async type(text: string): Promise<void> {
    await this.page.keyboard.type(text);
  }

  /**
   * Press Enter
   */
  async enter(): Promise<void> {
    await this.press("Enter");
  }

  /**
   * Press Tab
   */
  async tab(): Promise<void> {
    await this.press("Tab");
  }

  /**
   * Press Escape
   */
  async escape(): Promise<void> {
    await this.press("Escape");
  }

  /**
   * Press Backspace
   */
  async backspace(): Promise<void> {
    await this.press("Backspace");
  }

  /**
   * Select All
   */
  async selectAll(): Promise<void> {
    await this.press("Control+A");
  }

  /**
   * Copy
   */
  async copy(): Promise<void> {
    await this.press("Control+C");
  }

  /**
   * Paste
   */
  async paste(): Promise<void> {
    await this.press("Control+V");
  }

  /**
   * Cut
   */
  async cut(): Promise<void> {
    await this.press("Control+X");
  }

  /**
   * Undo
   */
  async undo(): Promise<void> {
    await this.press("Control+Z");
  }

  /**
   * Redo
   */
  async redo(): Promise<void> {
    await this.press("Control+Y");
  }
}
