// import { EnvironmentManager } from "@core/config/EnvironmentManager";
// import { test } from "@fixtures/page.fixture";

// test.describe("Automation Exercise - Navigation", () => {
//   test("Verify user can navigate to Login page", async ({ pages }) => {
//     await pages.automationExercise.home.open();
//     await pages.automationExercise.home.openLogin();
//     await pages.automationExercise.auth.login.verifyLoaded();
//   });

//   test.describe("Login", () => {
//     test(
//       "Verify valid login",
//       {
//         tag: ["@ui", "@smoke", "@P1"],
//       },
//       async ({ pages }) => {
//         await pages.automationExercise.home.open();
//         await pages.automationExercise.home.openLogin();
//         await pages.automationExercise.auth.login.login(
//           EnvironmentManager.getAdminUsername(),
//           EnvironmentManager.getAdminPassword()
//         );
//         await pages.automationExercise.common.header.verifyLoggedIn(
//           EnvironmentManager.getAdminUsername()
//         );
//       }
//     );
//   });
// });
