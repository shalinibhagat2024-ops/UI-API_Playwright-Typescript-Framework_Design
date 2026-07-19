import fs from "fs";
import path from "path";

export class AllureExecutor {
  public static generate(): void {
    const outputFolder = path.join(process.cwd(), "allure-results");
    fs.mkdirSync(outputFolder, { recursive: true });

    const executor = {
      name: process.env.GITHUB_ACTIONS ? "GitHub Actions" : "Local",

      type: "github",

      buildName: process.env.GITHUB_RUN_NUMBER ?? "Local",

      buildUrl:
        process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID
          ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
          : "",

      reportName: "Enterprise Playwright Framework",
    };

    fs.writeFileSync(path.join(outputFolder, "executor.json"), JSON.stringify(executor, null, 4));
  }
}
