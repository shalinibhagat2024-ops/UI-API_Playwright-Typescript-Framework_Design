import { test as base } from "@playwright/test";

export const test = base.extend({
  storageState: "playwright/.auth/StandardUser.json",
});

export { expect } from "@playwright/test";
