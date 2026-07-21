import { DataProviderFactory } from "@api/core/data/DataProviderFactory";
import { ProductTestData } from "@api/modules/products/data/ProductTestData";
import { BaseBuilder } from "@api/shared/builders/BaseBuilder";
import { RandomDataUtil } from "@api/shared/utils/RandomDataUtil";
import { ProductCreateRequest } from "src/api/modules/products/models/ProductCreateRequest";

export class ProductBuilder extends BaseBuilder<ProductCreateRequest> {
  private constructor() {
    super({
      ...ProductTestData.defaultProduct,

      title: RandomDataUtil.productName(),
    });
  }

  static create(): ProductBuilder {
    return new ProductBuilder();
  }

  withTitle(title: string): ProductBuilder {
    this.data.title = title;

    return this;
  }

  withDescription(description: string): ProductBuilder {
    this.data.description = description;

    return this;
  }

  withCategory(category: string): ProductBuilder {
    this.data.category = category;

    return this;
  }

  withPrice(price: number): ProductBuilder {
    this.data.price = price;

    return this;
  }

  withStock(stock: number): ProductBuilder {
    this.data.stock = stock;

    return this;
  }

  withBrand(brand: string): ProductBuilder {
    this.data.brand = brand;

    return this;
  }

  public static async fromJson(fileName: string): Promise<ProductCreateRequest> {
    return await DataProviderFactory.json<ProductCreateRequest>().read(fileName);
  }

  public static fake(): ProductCreateRequest {
    return DataProviderFactory.faker().product();
  }
}
