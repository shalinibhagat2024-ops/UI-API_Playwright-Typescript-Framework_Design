import { expect } from "@playwright/test";

export class PaymentAssertions {
  public static success(actual: string): void {
    expect(actual).toContain("Order Placed");
  }
}
