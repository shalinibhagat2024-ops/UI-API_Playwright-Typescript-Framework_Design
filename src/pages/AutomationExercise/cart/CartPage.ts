import { expect, Locator, Page } from "@playwright/test";
import { Logger } from "src/core/logger/Logger";
import { CartItem } from "src/models/CartItem";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class CartPage extends BasePage {
  // Navigation
  private readonly btnCart: Locator;

  // Cart
  private readonly cartRows: Locator;
  private readonly btnProceedToCheckout: Locator;
  private readonly lblShoppingCart: Locator;
  private readonly lblEmptyCart: Locator;
  private readonly tblCart: Locator;

  constructor(page: Page) {
    super(page);
    this.btnCart = page.locator("a[href='/view_cart']");
    this.cartRows = page.locator("#cart_info_table tbody tr");
    this.btnProceedToCheckout = page.getByText("Proceed To Checkout");
    this.lblShoppingCart = page.getByRole("heading", {
      name: "Shopping Cart",
    });
    this.lblEmptyCart = page.locator("#empty_cart");
    this.tblCart = this.page.locator("#cart_info_table");
  }

  /**
   * Open Cart
   */
  public async open(): Promise<void> {
    Logger.info("Opening Cart Page.");
    await this.ui.button(this.btnCart).click();
  }

  /**
   * Verify Cart Opened
   */
  public async verifyOpened(): Promise<void> {
    Logger.info("Verifying Cart Page.");
    await expect(this.page).toHaveURL(/view_cart/);
    await expect(this.tblCart).toBeVisible();
  }

  /**
   * Product Count
   */
  public async getProductCount(): Promise<number> {
    return await this.cartRows.count();
  }

  /**
   * Read All Products
   */
  public async getProducts(): Promise<CartItem[]> {
    const items: CartItem[] = [];
    const count = await this.cartRows.count();

    for (let i = 0; i < count; i++) {
      items.push(await this.readRow(this.cartRows.nth(i)));
    }

    return items;
  }

  /**
   * Get Product
   */
  public async getProduct(productName: string): Promise<CartItem> {
    const products = await this.getProducts();
    const product = products.find((x) => x.name.toLowerCase() === productName.toLowerCase());

    if (!product) {
      throw new Error(`Product '${productName}' not found.`);
    }

    return product;
  }

  /**
   * Verify Product Exists
   */
  public async containsProduct(productName: string): Promise<boolean> {
    const locator = this.page.locator(".cart_description h4 a", {
      hasText: productName,
    });

    return (await locator.count()) > 0;
  }

  /**
   * Remove Product
   */
  public async removeProduct(productName: string): Promise<void> {
    const rows = await this.cartRows.count();

    for (let i = 0; i < rows; i++) {
      const row = this.cartRows.nth(i);
      const name = (await row.locator(".cart_description h4 a").textContent())?.trim() ?? "";

      if (name.toLowerCase() === productName.toLowerCase()) {
        Logger.info(`Removing ${productName}`);
        await row.locator(".cart_quantity_delete").click();

        // Wait until the row is removed from the DOM
        await row.waitFor({
          state: "detached",
          timeout: 10000,
        });

        Logger.info(`${productName} removed successfully.`);
        return;
      }
    }

    throw new Error(`Product '${productName}' not found.`);
  }

  /**
   * Proceed Checkout
   */
  public async proceedToCheckout(): Promise<void> {
    Logger.info("Proceeding To Checkout.");
    await this.ui.button(this.btnProceedToCheckout).click();
    await this.page.waitForURL("**/checkout");
  }

  /**
   * Empty Cart
   */
  public async isEmpty(): Promise<boolean> {
    return await this.lblEmptyCart.isVisible().catch(() => false);
  }

  /**
   * Read Single Cart Row
   */
  private async readRow(row: Locator): Promise<CartItem> {
    const name = (await row.locator(".cart_description h4 a").textContent())?.trim() ?? "";
    const category = (await row.locator(".cart_description p").textContent())?.trim() ?? "";
    const price = Number(
      (await row.locator(".cart_price p").textContent())?.replace("Rs.", "").trim()
    );
    const quantity = Number(await row.locator(".cart_quantity button").textContent());
    const total = Number(
      (await row.locator(".cart_total_price").textContent())?.replace("Rs.", "").trim()
    );

    return {
      name,
      category,
      price,
      quantity,
      total,
    };
  }

  /**
   * Returns true if cart contains any products
   */
  public async hasProducts(): Promise<boolean> {
    return (await this.cartRows.count()) > 0;
  }

  /**
   * Remove all products from cart
   */
  public async clearCart(): Promise<void> {
    Logger.info("Clearing shopping cart.");

    while ((await this.cartRows.count()) > 0) {
      const row = this.cartRows.first();
      await row.locator(".cart_quantity_delete").click();
      await expect(row).toBeHidden({
        timeout: 10000,
      });
    }

    Logger.info("Shopping cart is empty.");
  }

  /**
   * Verify Product Exists In Cart
   */
  public async verifyProductExists(productName: string): Promise<void> {
    const row = this.page.locator("#cart_info_table tbody tr", {
      has: this.page.locator(".cart_description a", {
        hasText: productName,
      }),
    });

    await expect(row).toBeVisible();
  }

  /**
   * Verify Product Removed From Cart
   */
  public async verifyProductRemoved(productName: string): Promise<void> {
    const row = this.page.locator("#cart_info_table tbody tr", {
      has: this.page.locator(".cart_description a", {
        hasText: productName,
      }),
    });

    await expect(row).toHaveCount(0);
  }
}
