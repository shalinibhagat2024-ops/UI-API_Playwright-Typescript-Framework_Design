import { CartAssertions } from "@core/assertions/CartAssertions";
import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Verify Quantity", () => {
  test(
    "Verify Default Quantity",
    {
      tag: ["@ui", "@cart", "@regression"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
      const item = await pages.automationExercise.auth.cart.getProduct(product.name);
      CartAssertions.quantity(item.quantity, 6);
    }
  );
});
