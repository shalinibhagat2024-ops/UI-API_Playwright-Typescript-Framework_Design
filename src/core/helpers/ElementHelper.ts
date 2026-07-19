import { Logger } from "@core/logger/Logger";
import { Locator } from "@playwright/test";

export class ElementHelper {
  /**
   * Click an element.
   */
  async click(locator: Locator): Promise<void> {
    try {
      await locator.waitFor({
        state: "visible",
      });

      Logger.info("Clicking element.");

      await locator.click();
    } catch (error) {
      Logger.error(`Failed to click element. ${error}`);
      throw error;
    }
  }

  /**
   * Fill text in an input field.
   */
  async fill(locator: Locator, value: string): Promise<void> {
    try {
      await locator.waitFor({
        state: "visible",
      });

      Logger.info(`Entering value: ${value}`);

      await locator.fill(value);
    } catch (error) {
      Logger.error(`Failed to enter text. ${error}`);
      throw error;
    }
  }

  /**
   * Clear an input field.
   */
  async clear(locator: Locator): Promise<void> {
    try {
      await locator.waitFor({
        state: "visible",
      });

      await locator.clear();

      Logger.info("Input field cleared.");
    } catch (error) {
      Logger.error(`Failed to clear input field. ${error}`);
      throw error;
    }
  }

  /**
   * Get text from an element.
   */
  async getText(locator: Locator): Promise<string> {
    try {
      await locator.waitFor({
        state: "visible",
      });

      const text = await locator.textContent();

      Logger.info(`Captured text: ${text}`);

      return text?.trim() ?? "";
    } catch (error) {
      Logger.error(`Failed to get text. ${error}`);
      throw error;
    }
  }

  /**
   * Hover over an element.
   */
  async hover(locator: Locator): Promise<void> {
    try {
      await locator.hover();

      Logger.info("Hovered over element.");
    } catch (error) {
      Logger.error(`Failed to hover. ${error}`);
      throw error;
    }
  }

  /**
   * Double click.
   */
  async doubleClick(locator: Locator): Promise<void> {
    try {
      await locator.dblclick();

      Logger.info("Double clicked element.");
    } catch (error) {
      Logger.error(`Failed to double click. ${error}`);
      throw error;
    }
  }

  /**
   * Right click.
   */
  async rightClick(locator: Locator): Promise<void> {
    try {
      await locator.click({
        button: "right",
      });

      Logger.info("Right clicked element.");
    } catch (error) {
      Logger.error(`Failed to right click. ${error}`);
      throw error;
    }
  }

  /**
   * Check checkbox.
   */
  async check(locator: Locator): Promise<void> {
    try {
      await locator.check();

      Logger.info("Checkbox checked.");
    } catch (error) {
      Logger.error(`Failed to check checkbox. ${error}`);
      throw error;
    }
  }

  /**
   * Uncheck checkbox.
   */
  async uncheck(locator: Locator): Promise<void> {
    try {
      await locator.uncheck();

      Logger.info("Checkbox unchecked.");
    } catch (error) {
      Logger.error(`Failed to uncheck checkbox. ${error}`);
      throw error;
    }
  }

  /**
   * Select dropdown by value.
   */
  async selectByValue(locator: Locator, value: string): Promise<void> {
    try {
      await locator.selectOption(value);

      Logger.info(`Selected value: ${value}`);
    } catch (error) {
      Logger.error(`Failed to select value. ${error}`);
      throw error;
    }
  }

  /**
   * Press keyboard key.
   */
  async press(locator: Locator, key: string): Promise<void> {
    try {
      await locator.press(key);

      Logger.info(`Pressed key: ${key}`);
    } catch (error) {
      Logger.error(`Failed to press key. ${error}`);
      throw error;
    }
  }

  /**
   * Scroll element into view.
   */
  async scrollIntoView(locator: Locator): Promise<void> {
    try {
      await locator.scrollIntoViewIfNeeded();

      Logger.info("Scrolled element into view.");
    } catch (error) {
      Logger.error(`Failed to scroll. ${error}`);
      throw error;
    }
  }

  /**
   * Is element visible?
   */
  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  /**
   * Is element enabled?
   */
  async isEnabled(locator: Locator): Promise<boolean> {
    return locator.isEnabled();
  }

  /**
   * Get attribute.
   */
  async getAttribute(locator: Locator, attribute: string): Promise<string | null> {
    return locator.getAttribute(attribute);
  }
}
