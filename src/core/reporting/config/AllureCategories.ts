import fs from "fs";
import path from "path";

export class AllureCategories {
  public static generate(): void {
    // Ensure allure-results folder exists
    const outputFolder = path.join(process.cwd(), "allure-results");

    fs.mkdirSync(outputFolder, {
      recursive: true,
    });

    const categories = [
      {
        name: "Assertion Failure",
        matchedStatuses: ["failed"],
        messageRegex: "expect",
      },

      {
        name: "Locator Failure",
        matchedStatuses: ["failed"],
        messageRegex: "locator",
      },

      {
        name: "Timeout",
        matchedStatuses: ["broken"],
        messageRegex: "Timeout",
      },

      {
        name: "Network",
        matchedStatuses: ["broken"],
        messageRegex: "ERR",
      },

      {
        name: "API Failure",
        matchedStatuses: ["failed"],
        messageRegex: "API",
      },
    ];

    fs.writeFileSync(
      path.join(outputFolder, "categories.json"),
      JSON.stringify(categories, null, 4)
    );
  }
}
