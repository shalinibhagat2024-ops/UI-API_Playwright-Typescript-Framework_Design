import { CartTestData } from "@api/modules/carts/data/CartTestData";
import { CartRequest } from "@api/modules/carts/models/CartRequest";
import { BaseBuilder } from "@api/shared/builders/BaseBuilder";

export class CartBuilder extends BaseBuilder<CartRequest> {
  private constructor() {
    super({
      ...CartTestData.defaultCart,
    });
  }

  static create() {
    return new CartBuilder();
  }

  withUser(userId: number) {
    this.data.userId = userId;

    return this;
  }

  withProducts(products: CartRequest["products"]) {
    this.data.products = products;

    return this;
  }
}
