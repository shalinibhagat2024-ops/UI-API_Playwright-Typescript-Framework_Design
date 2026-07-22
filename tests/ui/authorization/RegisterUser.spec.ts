import { test } from "@fixtures/page.fixture";
import { UserDataProvider } from "src/testdata/providers/UserDataProvider";

const users = UserDataProvider.validUsers();

test.describe("Register New User", () => {
  // Registration scenarios should execute sequentially
  test.describe.configure({
    mode: "serial",
  });

  for (const user of users) {
    test(
      `Register ${user.name}`,
      {
        tag: ["@ui", "@smoke", "@registerNewUser", "@p1"],
      },
      async ({ pages }) => {
        await pages.automationExercise.home.open();
        await pages.automationExercise.home.openLogin();
        await pages.automationExercise.auth.login.startSignup(user.name, user.email);
        await pages.automationExercise.auth.signupInformation.register(user);
        await pages.automationExercise.auth.accountCreated.verifyCreated();
        await pages.automationExercise.auth.accountCreated.continue();
        await pages.automationExercise.common.header.verifyLoggedIn(user.name);
        await pages.automationExercise.common.header.deleteAccount();
        await pages.automationExercise.auth.deleteAccount.verifyDeleted();
        await pages.automationExercise.auth.deleteAccount.continue();
      }
    );
  }
});
