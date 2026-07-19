import { AllureReporter } from "@api/shared/reporting/AllureReporter";
import { APIResponse } from "@playwright/test";

export class ResponseUtil {
  static async json<T>(response: APIResponse): Promise<T> {
    const json = await response.json();

    AllureReporter.attachJson(
      "Response",

      json
    );

    return json as T;
  }

  static async text(response: APIResponse): Promise<string> {
    return await response.text();
  }
}
