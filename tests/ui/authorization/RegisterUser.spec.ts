import { test } from "@fixtures/page.fixture";
import { UserDataProvider } from "src/testdata/providers/UserDataProvider";

const users = UserDataProvider.validUsers();

test.describe("Register User", () => {
  // Registration scenarios should execute sequentially
  test.describe.configure({
    mode: "serial",
  });

  for (const user of users) {
    test(
      `Register ${user.name}`,
      {
        tag: ["@ui", "@smoke", "@P1"],
      },
      async ({ pages }) => {
        // Open Home
        await pages.automationExercise.home.open();
        // Navigate to Login / Signup
        await pages.automationExercise.home.openLogin();
        // Start Signup
        await pages.automationExercise.auth.login.startSignup(user.name, user.email);
        // Complete Registration
        await pages.automationExercise.auth.signupInformation.register(user);
        // Verify Account Created
        await pages.automationExercise.auth.accountCreated.verifyCreated();
        // Continue
        await pages.automationExercise.auth.accountCreated.continue();
        // Verify Logged In
        await pages.automationExercise.common.header.verifyLoggedIn(user.name);
        // Delete Account
        await pages.automationExercise.common.header.deleteAccount();
        // Verify Account Deleted
        await pages.automationExercise.auth.deleteAccount.verifyDeleted();
        // Continue to Home Page
        await pages.automationExercise.auth.deleteAccount.continue();
      }
    );
  }
});
