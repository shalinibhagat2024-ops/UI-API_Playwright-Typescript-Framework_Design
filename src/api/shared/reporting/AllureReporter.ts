import { ContentType } from "allure-js-commons";
import { allure } from "allure-playwright";

export class AllureReporter {
  static attachJson(
    name: string,

    data: unknown
  ): void {
    allure.attachment(
      name,

      JSON.stringify(
        data,

        null,

        4
      ),

      ContentType.JSON
    );
  }

  static attachText(
    name: string,

    text: string
  ): void {
    allure.attachment(
      name,

      text,

      ContentType.TEXT
    );
  }
}
