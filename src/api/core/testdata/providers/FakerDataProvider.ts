import { faker } from "@faker-js/faker";
import { ProductCreateRequest } from "src/api/modules/products/models/ProductCreateRequest";

export class FakerProvider {
  product(): ProductCreateRequest {
    return {
      title: faker.commerce.productName(),

      description: faker.commerce.productDescription(),

      category: "smartphones",

      price: Number(
        faker.commerce.price({
          min: 100,

          max: 5000,
        })
      ),

      brand: faker.company.name(),

      stock: faker.number.int({
        min: 10,

        max: 500,
      }),
    };
  }
}
