import { expect, test } from "@fixtures/page.fixture";

test.describe("Category", () => {
  test(
    "Verify Women Dress",
    {
      tag: ["@ui", "@product", "@regression"],
    },
    async ({ page, pages }) => {
      await pages.automationExercise.home.open();

      await pages.automationExercise.auth.products.open();
      await pages.automationExercise.auth.products.selectCategory("Women", "Dress");

      await expect(page).toHaveURL(/category_products/);
    }
  );
});
