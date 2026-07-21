import { CartAssertions } from "@api/modules/carts/assertions/CartAssertions";
import { CartBuilder } from "@api/modules/carts/builders/CartBuilder";
import { CartResponse } from "@api/modules/carts/models/CartResponse";
import { SchemaAssertions } from "@api/shared/assertions/SchemaAssertions";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { Schemas } from "@api/shared/schemas/Schemas";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test(
  "POST - Create Cart",
  { tag: ["@api", "@smoke", "@regression", "@apiCart", "@p2"] },
  async ({ cartService }) => {
    const cartRequest = CartBuilder.create().build();
    const response = await cartService.addCart(cartRequest);
    StatusAssertions.verify201(response);
    const cart = await ResponseUtil.json<CartResponse>(response);
    SchemaAssertions.validate(Schemas.Cart, cart);
    CartAssertions.verifyCreatedCart(response, cartRequest, cart);
  }
);
