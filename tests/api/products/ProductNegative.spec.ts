import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { test } from "@fixtures/api.fixture";

test(
  "Invalid Product Id",
  { tag: ["@api", "@sanity", "@apiProduct", "@p2"] },
  async ({ productService }) => {
    const response = await productService.getProductById(99999999);
    StatusAssertions.verify404(response);
  }
);
