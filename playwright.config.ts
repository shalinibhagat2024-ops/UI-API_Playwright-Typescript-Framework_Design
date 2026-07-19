import { EnvironmentManager } from "@core/config/EnvironmentManager";
import { defineConfig, devices } from "@playwright/test";

const execution = EnvironmentManager.getExecutionConfig();
const browser = EnvironmentManager.getBrowserConfig();
const reporting = EnvironmentManager.getReportingConfig();

const PLAYWRIGHT_REPORT = "playwright-report";
const ALLURE_RESULTS = "allure-results";
const TEST_RESULTS = "test-results";

export default defineConfig({
  globalSetup: require.resolve("./src/global.setup"),
  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : execution.retries,

  workers: process.env.CI ? 2 : undefined,

  timeout: execution.timeout,

  preserveOutput: "failures-only",

  expect: {
    timeout: execution.expectTimeout,
  },

  reporter: [
    ["list"],

    [
      "html",
      {
        outputFolder: PLAYWRIGHT_REPORT,
        open: "never",
      },
    ],

    [
      "allure-playwright",
      {
        outputFolder: ALLURE_RESULTS,
        detail: true,
        suiteTitle: true,
      },
    ],
  ],

  outputDir: TEST_RESULTS,

  use: {
    baseURL: EnvironmentManager.getBaseUrl(),

    headless: process.env.CI ? true : browser.headless,

    screenshot: reporting.screenshot as "off" | "on" | "only-on-failure",

    video: reporting.video as "off" | "on" | "retain-on-failure" | "retry-with-video",

    trace: reporting.trace as
      "off" | "on" | "on-first-retry" | "retain-on-failure" | "retry-with-trace",

    actionTimeout: 15000,

    navigationTimeout: 30000,

    ignoreHTTPSErrors: true,

    viewport: {
      width: 1920,
      height: 1080,
    },
  },

  projects: [
    {
      name: "setup-admin",
      testDir: "./tests/setup",
      testMatch: /admin\.setup\.ts$/,
    },

    {
      name: "chromium",
      testDir: "./tests/ui",
      use: {
        ...devices["Desktop Chrome"],
        storageState: "playwright/.auth/AdminUser.json",
      },
      dependencies: ["setup-admin"],
    },

    {
      name: "firefox",
      testDir: "./tests/ui",
      use: {
        ...devices["Desktop Firefox"],
        storageState: "playwright/.auth/AdminUser.json",
      },
      dependencies: ["setup-admin"],
    },

    {
      name: "webkit",
      testDir: "./tests/ui",
      use: {
        ...devices["Desktop Safari"],
        storageState: "playwright/.auth/AdminUser.json",
      },
      dependencies: ["setup-admin"],
    },

    {
      name: "api",
      testDir: "./tests/api",
      use: {
        baseURL: EnvironmentManager.getApiBaseUrl(),
        storageState: undefined,
      },
    },
  ],
});
