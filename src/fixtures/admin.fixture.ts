import { test as base } from "@playwright/test";

export const test = base.extend({
  storageState: "playwright/.auth/AdminUser.json",
});

export { expect } from "@playwright/test";
