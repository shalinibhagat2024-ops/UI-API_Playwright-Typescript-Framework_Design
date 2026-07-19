import { test } from "@fixtures/page.fixture";
import { PaymentFactory } from "src/testdata/factories/PaymentFactory";
import { ProductFactory } from "src/testdata/factories/ProductFactory";

test.describe("End To End Sanity", () => {
  test(
    "Complete Purchase Flow",
    {
      tag: ["@sanity", "@e2e", "@p1"],
    },
    async ({ pages }) => {
      const product = ProductFactory.blueTop();
      const payment = PaymentFactory.random();

      // Home
      await pages.automationExercise.home.open();

      // Products
      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.verifyOpened();

      // Add Product
      await pages.automationExercise.auth.products.addToCart(product);
      await pages.automationExercise.auth.products.viewCart();

      // Cart
      await pages.automationExercise.auth.cart.verifyOpened();
      await pages.automationExercise.auth.cart.verifyProductExists(product.name);
      await pages.automationExercise.auth.cart.proceedToCheckout();

      // Checkout
      await pages.automationExercise.auth.checkout.verifyOpened();
      await pages.automationExercise.auth.checkout.verifyDeliveryAddress();
      await pages.automationExercise.auth.checkout.enterComment("Enterprise Playwright Framework");
      await pages.automationExercise.auth.checkout.placeOrder();

      // Payment
      await pages.automationExercise.auth.payment.verifyOpened();
      await pages.automationExercise.auth.payment.pay(payment);

      // Order Success
      await pages.automationExercise.auth.orderPlaced.verifyOrderPlaced();
      await pages.automationExercise.auth.orderPlaced.continue();
    }
  );
});
