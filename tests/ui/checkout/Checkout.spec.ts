import { test } from "@fixtures/page.fixture";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("Checkout", () => {
  test(
    "Verify Checkout",
    {
      tag: ["@ui", "@checkout", "@smoke", "@regression"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      await pages.automationExercise.home.open();
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();
      await pages.automationExercise.auth.cart.proceedToCheckout();
      await pages.automationExercise.auth.checkout.verifyOpened();
      await pages.automationExercise.auth.checkout.verifyDeliveryAddress();
      await pages.automationExercise.auth.checkout.verifyBillingAddress();
      await pages.automationExercise.auth.checkout.verifyProducts(1);
      await pages.automationExercise.auth.checkout.enterComment("Automation Framework");
      await pages.automationExercise.auth.checkout.placeOrder();
    }
  );
});
