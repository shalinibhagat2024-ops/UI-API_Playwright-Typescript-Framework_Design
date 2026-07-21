import { AllureReporter } from "@core/reporting/config/AllureReporter";
import { APIResponse } from "@playwright/test";

export class ResponseUtil {
  static async json<T>(response: APIResponse): Promise<T> {
    const json = await response.json();

    await AllureReporter.attachJson("Response", json);

    return json as T;
  }

  static async text(response: APIResponse): Promise<string> {
    const text = await response.text();

    await AllureReporter.attachText("Response", text);

    return text;
  }
}
