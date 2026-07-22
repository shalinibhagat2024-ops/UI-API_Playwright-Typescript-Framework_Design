import { test as setup } from "@playwright/test";
import { EnvironmentManager } from "src/core/config/EnvironmentManager";

setup("Authenticate", { tag: ["@ui", "@regression", "@smoke", "@p"] }, async ({ page }) => {
  await page.goto(EnvironmentManager.getBaseUrl());
  await page.locator("a[href='/login']").click();
  await page.locator("[data-qa='login-email']").fill(EnvironmentManager.getStandardUsername());
  await page.locator("[data-qa='login-password']").fill(EnvironmentManager.getStandardPassword());
  await page.locator("[data-qa='login-button']").click();
  await page.context().storageState({
    path: "playwright/.auth/StandardUser.json",
  });
});
