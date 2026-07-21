import { ProductAssertions } from "@api/modules/products/assertions/ProductAssertions";
import { ProductListResponse } from "@api/modules/products/models/ProductListResponse";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test(
  "Search Product",
  { tag: ["@api", "@sanity", "@apiProduct", "@p2"] },
  async ({ productService }) => {
    const response = await productService.searchProducts("phone");
    const products = await ResponseUtil.json<ProductListResponse>(response);
    StatusAssertions.verify200(response);
    ProductAssertions;
    const productCount = ProductAssertions.verifyProductList(products);
  }
);
