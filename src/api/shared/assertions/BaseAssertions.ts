import { expect } from "@playwright/test";

export abstract class BaseAssertions {
  protected static defined(value: unknown): void {
    expect(value).toBeDefined();
  }

  protected static notNull(value: unknown): void {
    expect(value).not.toBeNull();
  }
}
