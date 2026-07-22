import { CartAssertions } from "@api/modules/carts/assertions/CartAssertions";
import { CartListResponse } from "@api/modules/carts/models/CartListResponse";
import { SchemaAssertions } from "@api/shared/assertions/SchemaAssertions";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { Schemas } from "@api/shared/schemas/Schemas";
import { test } from "@fixtures/api.fixture";
import { ResponseUtil } from "src/api/shared/utils/ResponseUtil";

test(
  "GET - Get All Carts",
  { tag: ["@api", "@smoke", "@regression", "@apiCart", "@p2"] },
  async ({ cartService }) => {
    const response = await cartService.getAllCarts();
    StatusAssertions.verify200(response);
    const carts = await ResponseUtil.json<CartListResponse>(response);
    SchemaAssertions.validate(Schemas.CartList, carts);
    CartAssertions.verifyCartList(carts);
  }
);
