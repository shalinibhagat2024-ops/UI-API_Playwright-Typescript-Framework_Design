import { ProductCreateRequest } from "@api/modules/products/models/ProductCreateRequest";
import { DataGenerator } from "@utils/data/DataGenerator";

export class ProductData {
  public static valid(): ProductCreateRequest {
    return {
      title: DataGenerator.productName(),

      description: "Enterprise Playwright Product",

      price: DataGenerator.randomNumber(100, 1000),

      discountPercentage: 10,

      rating: 4.5,

      stock: 100,

      brand: "Apple",

      category: DataGenerator.category(),

      thumbnail: "https://dummyjson.com/image.png",
    };
  }
}
