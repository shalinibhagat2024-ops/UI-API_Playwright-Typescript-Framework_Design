import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Add Product", () => {
  test(
    "Add Product To Cart",
    {
      tag: ["@ui", "@product", "@regression", "@smoke", "@p2"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();

      await pages.automationExercise.home.open();

      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
    }
  );
});
