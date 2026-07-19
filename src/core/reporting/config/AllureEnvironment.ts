import { EnvironmentManager } from "@core/config/EnvironmentManager";
import fs from "fs";
import os from "os";
import path from "path";

export class AllureEnvironment {
  public static generate(): void {
    const config = EnvironmentManager.getConfig();

    // Ensure allure-results folder exists
    const outputFolder = path.join(process.cwd(), "allure-results");

    fs.mkdirSync(outputFolder, {
      recursive: true,
    });

    const environment = [
      `Environment=${EnvironmentManager.getEnvironmentName()}`,

      `Browser=${EnvironmentManager.getBrowserConfig().name}`,

      `Base_URL= URL=${EnvironmentManager.getBaseUrl()}`,

      `API_URL= URL=${EnvironmentManager.getApiBaseUrl()}`,

      `Execution=${process.env.GITHUB_ACTIONS ? "GitHub Actions" : "Local"}`,

      `OS=${os.type()} ${os.release()}`,

      `Node=${process.version}`,

      `Framework=Playwright + TypeScript Enterprise`,

      `User=${os.userInfo().username}`,

      `Timezone=${Intl.DateTimeFormat().resolvedOptions().timeZone}`,
    ].join("\n");

    fs.writeFileSync(path.join(outputFolder, "environment.properties"), environment);
  }
}
