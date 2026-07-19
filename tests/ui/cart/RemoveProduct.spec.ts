import { test } from "@fixtures/page.fixture";
import { expect } from "@playwright/test";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Remove Product", () => {
  test(
    "Remove Product From Cart",
    {
      tag: ["@ui", "@cart", "@regression", "@smoke"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
      await pages.automationExercise.auth.cart.removeProduct(product.name);
      const exists = await pages.automationExercise.auth.cart.containsProduct(product.name);
      expect(exists).toBeFalsy();
    }
  );
});
