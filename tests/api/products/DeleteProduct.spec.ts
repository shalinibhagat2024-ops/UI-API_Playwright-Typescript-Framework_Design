import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { test } from "@fixtures/api.fixture";

test("DELETE - Delete Product", async ({ productService }) => {
  const response = await productService.deleteProduct(1);

  StatusAssertions.verify200(response);
});
