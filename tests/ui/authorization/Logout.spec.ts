import { test } from "@fixtures/page.fixture";

test.describe("Logout", () => {
  test.skip(
    "Verify user can logout successfully",
    {
      tag: ["@smoke", "@regression", "@logout"],
    },
    async ({ pages }) => {
      // Navigate to application
      pages.automationExercise.auth.login;
      pages.automationExercise.auth.logOut;
    }
  );
});
