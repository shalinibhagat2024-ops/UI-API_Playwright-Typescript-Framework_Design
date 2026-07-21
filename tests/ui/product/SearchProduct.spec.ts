import { ProductAssertions } from "@core/assertions/ProductAssertions";
import { UiMetadata } from "@core/reporting/metadata/UiMetadata";
import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Search Product", () => {
  test(
    "Search Existing Product",

    {
      tag: ["@ui", "@products", "@smoke"],
    },

    async ({ pages }) => {
      await UiMetadata.productSearch();
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.search(product);
      ProductAssertions.exists(
        await pages.automationExercise.auth.products.containsProduct(product)
      );
    }
  );
});
