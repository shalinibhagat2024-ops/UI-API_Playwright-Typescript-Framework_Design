import { expect, test } from "@fixtures/page.fixture";

test.describe("Brand", () => {
  test(
    "Verify Polo",
    {
      tag: ["@ui", "@product", "@regression", "@p1"],
    },
    async ({ pages, page }) => {
      await pages.automationExercise.home.open();

      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.selectBrand("Polo");

      await expect(page).toHaveURL(/brand_products/);
    }
  );
});
