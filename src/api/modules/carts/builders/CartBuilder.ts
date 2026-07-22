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

//Instead of writing everything repeatedly, we divide responsibilities.
/*
API.spec

Only describes the scenario.

test("Create Product", async ({ productService }) => {

    const request = ProductBuilder
        .create()
        .withTitle("iPhone 16")
        .build();

    const response = await productService.addProduct(request);

    ProductAssertions.validateProductCreated(response);

});

Notice something?

There is no

API Context
URL
HTTP Method
POST
JSON Parsing

Everything is hidden.

Where did everything go?

Request Body

Moved to

ProductBuilder

HTTP Request
Moved to
ApiClient

Endpoint
Moved to
ApiEndpoints

POST Method
Moved to
BaseApiService

CRUD Logic
Moved to
BaseCrudService

Assertions
Moved to
ProductAssertions

Without Framework

API.spec
Create Context
Create Body
POST
Read Response
Assertions

With Framework
API.spec
     │
     ▼
ProductBuilder
     │
     ▼
ProductService
     │
     ▼
BaseCrudService
     │
     ▼
ApiClient
     │
     ▼
API Server
     │
     ▼
Assertions
*/
