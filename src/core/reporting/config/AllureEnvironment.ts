import { EnvironmentManager } from "@core/config/EnvironmentManager";
import fs from "fs";
import os from "os";
import path from "path";

export class AllureEnvironment {
  public static generate(): void {
    const outputFolder = path.join(process.cwd(), "allure-results");

    fs.mkdirSync(outputFolder, {
      recursive: true,
    });

    const environment = [
      `Environment=${EnvironmentManager.getEnvironmentName()}`,

      `Browser=${EnvironmentManager.getBrowserConfig().name}`,

      `Base_URL=${EnvironmentManager.getBaseUrl()}`,

      `API_URL=${EnvironmentManager.getApiBaseUrl()}`,

      `Execution=${process.env.GITHUB_ACTIONS ? "GitHub Actions" : "Local"}`,

      `Branch=${process.env.GITHUB_REF_NAME ?? "Local"}`,

      `Commit=${process.env.GITHUB_SHA ?? "N/A"}`,

      `Build=${process.env.GITHUB_RUN_NUMBER ?? "Local"}`,

      `Repository=${process.env.GITHUB_REPOSITORY ?? "Local Repository"}`,

      `OS=${os.type()} ${os.release()}`,

      `Node=${process.version}`,

      `Framework=Playwright + TypeScript Enterprise`,

      `User=${os.userInfo().username}`,
    ].join("\n");

    fs.writeFileSync(path.join(outputFolder, "environment.properties"), environment);
  }
}
