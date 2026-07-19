import { APIResponse } from "@playwright/test";

export class ResponseParser {
  public static async parse(response: APIResponse): Promise<unknown> {
    const contentType = response.headers()["content-type"] ?? "";

    try {
      if (contentType.includes("application/json")) {
        return await response.json();
      }

      return await response.text();
    } catch {
      return "Unable to parse response";
    }
  }
}
