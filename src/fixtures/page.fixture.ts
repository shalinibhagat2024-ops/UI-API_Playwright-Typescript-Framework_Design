import { test as base } from "@playwright/test";
import { FailureReporter } from "src/core/reporting/failure/FailureReporter";
import { AccountCreatedPage } from "src/pages/AutomationExercise/authorization/AccountCreatedPage";
import { DeleteAccountPage } from "src/pages/AutomationExercise/authorization/DeleteAccountPage";
import { LoginPage } from "src/pages/AutomationExercise/authorization/LoginPage";
import { LogoutPage } from "src/pages/AutomationExercise/authorization/LogoutPage";
import { SignupInformationPage } from "src/pages/AutomationExercise/authorization/SignupInformationPage";
import { CartPage } from "src/pages/AutomationExercise/cart/CartPage";
import { CheckoutPage } from "src/pages/AutomationExercise/checkout/CheckoutPage";
import { Header } from "src/pages/AutomationExercise/common/Header";
import { HomePage } from "src/pages/AutomationExercise/common/HomePage";
import { OrderPlacedPage } from "src/pages/AutomationExercise/payment/OrderPlacedPage";
import { PaymentPage } from "src/pages/AutomationExercise/payment/PaymentPage";
import { ProductDetailsPage } from "src/pages/AutomationExercise/product/ProductDetailsPage";
import { ProductsPage } from "src/pages/AutomationExercise/product/ProductsPage";

export interface PageFixture {
  pages: {
    automationExercise: {
      home: HomePage;
      auth: {
        login: LoginPage;
        signupInformation: SignupInformationPage;
        accountCreated: AccountCreatedPage;
        deleteAccount: DeleteAccountPage;
        productsDetails: ProductDetailsPage;
        products: ProductsPage;
        cart: CartPage;
        checkout: CheckoutPage;
        payment: PaymentPage;
        orderPlaced: OrderPlacedPage;
        logOut: LogoutPage;
      };
      common: {
        header: Header;
      };
    };
  };
}

export const test = base.extend<PageFixture>({
  pages: async ({ page }, use) => {
    await use({
      automationExercise: {
        home: new HomePage(page),
        auth: {
          login: new LoginPage(page),
          signupInformation: new SignupInformationPage(page),
          accountCreated: new AccountCreatedPage(page),
          deleteAccount: new DeleteAccountPage(page),
          productsDetails: new ProductDetailsPage(page),
          products: new ProductsPage(page),
          cart: new CartPage(page),
          checkout: new CheckoutPage(page),
          payment: new PaymentPage(page),
          orderPlaced: new OrderPlacedPage(page),
          logOut: new LogoutPage(page),
        },
        common: {
          header: new Header(page),
        },
      },
    });
  },
});

test.afterEach(async ({}, testInfo) => {
  await FailureReporter.attach(testInfo);
});

export { expect } from "@playwright/test";
