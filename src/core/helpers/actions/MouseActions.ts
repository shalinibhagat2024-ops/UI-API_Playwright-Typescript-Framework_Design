import { Locator, Page } from "@playwright/test";

export class MouseActions {
  constructor(private readonly page: Page) {}

  /**
   * Hover
   */
  async hover(locator: Locator): Promise<void> {
    await locator.hover();
  }

  /**
   * Drag and Drop
   */
  async dragAndDrop(source: Locator, destination: Locator): Promise<void> {
    await source.dragTo(destination);
  }

  /**
   * Move Mouse
   */
  async move(x: number, y: number): Promise<void> {
    await this.page.mouse.move(x, y);
  }

  /**
   * Mouse Down
   */
  async mouseDown(): Promise<void> {
    await this.page.mouse.down();
  }

  /**
   * Mouse Up
   */
  async mouseUp(): Promise<void> {
    await this.page.mouse.up();
  }

  /**
   * Wheel Scroll
   */
  async wheel(deltaX: number, deltaY: number): Promise<void> {
    await this.page.mouse.wheel(deltaX, deltaY);
  }

  /**
   * Click at Coordinates
   */
  async clickAt(x: number, y: number): Promise<void> {
    await this.page.mouse.click(x, y);
  }
}
