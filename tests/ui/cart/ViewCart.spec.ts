import { CartAssertions } from "@core/assertions/CartAssertions";
import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("View Cart", () => {
  test(
    "Verify Product Added Into Cart",
    {
      tag: ["@ui", "@cart", "@smoke", "@regression"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
      await pages.automationExercise.auth.cart.verifyOpened();
      CartAssertions.exists(await pages.automationExercise.auth.cart.containsProduct(product.name));
    }
  );
});
