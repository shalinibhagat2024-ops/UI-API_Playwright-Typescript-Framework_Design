import { expect } from "@playwright/test";

export class CheckoutAssertions {
  public static products(
    actual: number,

    expected: number
  ) {
    expect(actual).toBe(expected);
  }
}
