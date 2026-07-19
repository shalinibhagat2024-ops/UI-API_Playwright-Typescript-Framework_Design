import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Proceed Checkout", () => {
  test(
    "Verify Proceed Checkout",
    {
      tag: ["@ui", "@cart", "@checkout", "@smoke", "@regression"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
      await pages.automationExercise.auth.cart.proceedToCheckout();
    }
  );
});
