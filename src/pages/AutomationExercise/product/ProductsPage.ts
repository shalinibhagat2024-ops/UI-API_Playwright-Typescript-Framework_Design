import { Logger } from "@core/logger/Logger";
import { Product } from "@model/Product";
import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";

export class ProductsPage extends BasePage {
  // Navigation
  private readonly btnProducts: Locator;

  // Search
  private readonly txtSearch: Locator;
  private readonly btnSearch: Locator;

  // Product Grid
  private readonly productCards: Locator;
  private readonly searchProductField: Locator;

  constructor(page: Page) {
    super(page);
    this.btnProducts = page.locator("a[href='/products']");
    this.txtSearch = page.locator("#search_product");
    this.btnSearch = page.locator("#submit_search");

    // Every product is inside one col-sm-4
    this.productCards = page.locator(".product-image-wrapper");
    this.searchProductField = page.getByPlaceholder("Search Product");
  }

  /**
   * Open Products Page
   */
  public async open(): Promise<void> {
    Logger.info("Opening Products Page.");
    await this.ui.button(this.btnProducts).click();
  }

  /**
   * Verify Product Opened
   */
  public async verifyOpened(): Promise<void> {
    Logger.info("Verifying Cart Page.");
    await expect(this.page).toHaveURL(/products/);
    await expect(this.searchProductField).toBeVisible();
  }

  /**
   * Search Product
   */
  public async search(product: Product | string): Promise<void> {
    const searchText = typeof product === "string" ? product : product.name;
    Logger.info(`Searching Product : ${searchText}`);
    await this.ui.textbox(this.txtSearch).enter(searchText);
    await this.ui.button(this.btnSearch).click();
  }

  /**
   * Product Count
   */
  public async getProductCount(): Promise<number> {
    return await this.productCards.count();
  }

  /**
   * Product Exists
   */
  public async containsProduct(product: Product): Promise<boolean> {
    try {
      await this.findProductCard(product.name);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * View Product
   */
  public async openProduct(product: Product): Promise<void> {
    const card = await this.findProductCard(product.name);
    await card.locator(".choose a").click();
  }

  /**
   * Add Product To Cart
   */
  public async addToCart(product: Product): Promise<void> {
    Logger.info(`Adding ${product.name}`);
    const card = await this.findProductCard(product.name);
    await card.scrollIntoViewIfNeeded();

    const addButton = card.locator("a.add-to-cart").first();
    await expect(addButton).toBeAttached();
    await addButton.click({
      force: true,
    });

    await expect(this.page.locator("#cartModal")).toBeVisible();
  }

  /**
   * Continue Shopping
   */
  public async continueShopping(): Promise<void> {
    await this.page
      .locator("button")
      .filter({
        hasText: "Continue Shopping",
      })
      .click();
  }

  /**
   * View Cart
   */
  public async viewCart(): Promise<void> {
    const viewCart = this.page.locator("#cartModal").getByRole("link", {
      name: "View Cart",
    });

    await expect(viewCart).toBeVisible();
    await viewCart.click();
    await expect(this.page).toHaveURL(/view_cart/);
  }

  /**
   * Select Category
   */
  public async selectCategory(parent: string, child: string): Promise<void> {
    Logger.info(`Selecting ${parent} -> ${child}`);
    await this.page.locator(`a[href='#${parent}']`).click();
    await this.page
      .locator(`#${parent}`)
      .getByRole("link", {
        name: child,
        exact: true,
      })
      .click();
  }

  /**
   * Select Brand
   */
  public async selectBrand(brand: string): Promise<void> {
    Logger.info(`Selecting Brand ${brand}`);
    await this.page
      .locator(".brands-name")
      .getByRole("link", {
        name: new RegExp(brand),
      })
      .click();
  }

  /**
   * Private Helper
   */
  private async findProductCard(productName: string): Promise<Locator> {
    const card = this.page
      .locator(".features_items .product-image-wrapper")
      .filter({
        hasText: productName,
      })
      .first();

    await expect(card).toBeVisible();

    return card;
  }
}
