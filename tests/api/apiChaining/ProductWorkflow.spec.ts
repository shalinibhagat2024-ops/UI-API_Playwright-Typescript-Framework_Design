import { ProductAssertions } from "@api/modules/products/assertions/ProductAssertions";
import { ProductBuilder } from "@api/modules/products/builders/ProductBuilder";
import { ProductResponse } from "@api/modules/products/models/ProductResponse";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("E2E Product Workflow", async ({ productService }) => {
  // Step 1

  const productRequest = ProductBuilder.create()

    .build();

  // Step 2

  const createResponse = await productService.addProduct(productRequest);
  StatusAssertions.verify201(createResponse);

  const createdProduct = await ResponseUtil.json<ProductResponse>(createResponse);

  ProductAssertions.verifyCreatedProduct(createResponse, productRequest, createdProduct);

  // Step 2 - Update an existing product
  const updateResponse = await productService.updateProduct(1, {
    title: "Updated Product",
    price: 999,
  });

  StatusAssertions.verify200(updateResponse);

  const updatedProduct = await ResponseUtil.json<ProductResponse>(updateResponse);

  ProductAssertions.verifyUpdatedProduct(updateResponse, updatedProduct, "Updated Product", 999);

  // Step 3 - Delete the same existing product
  const deleteResponse = await productService.deleteProduct(1);

  StatusAssertions.verify200(deleteResponse);
});
