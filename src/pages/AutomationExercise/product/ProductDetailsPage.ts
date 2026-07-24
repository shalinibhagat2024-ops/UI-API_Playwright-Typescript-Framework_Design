import { Logger } from "@core/logger/Logger";
import { Locator, Page } from "@playwright/test";
import { Product } from "src/models/Product";
import { BasePage } from "src/pages/AutomationExercise/basePage/BasePage";
import { ProductBuilder } from "src/testdata/builders/ProductBuilder";

export class ProductDetailsPage extends BasePage {
  private readonly productInformation: Locator;
  private readonly txtQuantity: Locator;
  private readonly btnAddToCart: Locator;

  constructor(page: Page) {
    super(page);
    this.productInformation = page.locator(".product-information");
    this.txtQuantity = page.locator("#quantity");
    this.btnAddToCart = page.locator("button.cart");
  }

  /**
   * Verify Product Details Page Loaded
   */
  public async verifyLoaded(): Promise<void> {
    await this.assertions.visible(this.productInformation);
  }

  /**
   * Product Name
   */
  public async getName(): Promise<string> {
    return (await this.productInformation.locator("h2").textContent())?.trim() ?? "";
  }

  /**
   * Product Price
   */
  public async getPrice(): Promise<number> {
    const text = (await this.productInformation.locator("span span").first().textContent()) ?? "";
    return Number(text.replace("Rs.", "").trim());
  }

  /**
   * Category
   */
  public async getCategory(): Promise<string> {
    const text = (await this.productInformation.locator("p").first().textContent()) ?? "";
    return text.replace("Category:", "").trim();
  }

  /**
   * Availability
   */
  public async getAvailability(): Promise<string> {
    const text =
      (await this.productInformation
        .locator("p")
        .filter({
          hasText: "Availability",
        })
        .textContent()) ?? "";
    return text.replace("Availability:", "").trim();
  }

  /**
   * Condition
   */
  public async getCondition(): Promise<string> {
    const text =
      (await this.productInformation
        .locator("p")
        .filter({
          hasText: "Condition",
        })
        .textContent()) ?? "";
    return text.replace("Condition:", "").trim();
  }

  /**
   * Brand
   */
  public async getBrand(): Promise<string> {
    const text =
      (await this.productInformation
        .locator("p")
        .filter({
          hasText: "Brand",
        })
        .textContent()) ?? "";
    return text.replace("Brand:", "").trim();
  }

  /**
   * Quantity
   */
  public async setQuantity(quantity: number): Promise<void> {
    await this.txtQuantity.fill(quantity.toString());
  }

  /**
   * Read Quantity
   */
  public async getQuantity(): Promise<number> {
    return Number(await this.txtQuantity.inputValue());
  }

  /**
   * Add To Cart
   */
  public async addToCart(): Promise<void> {
    Logger.info("Adding Product To Cart.");
    await this.ui.button(this.btnAddToCart).click();
  }

  /**
   * Read Complete Product
   */
  public async getProduct(): Promise<Product> {
    return new ProductBuilder()
      .name(await this.getName())
      .price(await this.getPrice())
      .category(await this.getCategory())
      .brand(await this.getBrand())
      .build();
  }
}
