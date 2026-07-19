import { APIResponse, expect } from "@playwright/test";

export class StatusAssertions {
  static verify200(response: APIResponse): void {
    expect(response.status()).toBe(200);
  }

  static verify201(response: APIResponse): void {
    expect(response.status()).toBe(201);
  }

  static verify400(response: APIResponse): void {
    expect(response.status()).toBe(400);
  }

  static verify401(response: APIResponse): void {
    expect(response.status()).toBe(401);
  }

  static verify404(response: APIResponse): void {
    expect(response.status()).toBe(404);
  }
}
