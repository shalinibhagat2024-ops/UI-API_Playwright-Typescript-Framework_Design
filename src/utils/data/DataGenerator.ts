/**
 * Enterprise Data Generator
 *
 * Reusable utility for generating random test data.
 */
export class DataGenerator {
  /**
   * Random Integer
   */
  public static randomNumber(min: number = 1000, max: number = 9999): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Random Decimal
   */
  public static randomDecimal(min: number = 10, max: number = 1000): number {
    return Number((Math.random() * (max - min) + min).toFixed(2));
  }

  /**
   * Random String
   */
  public static randomString(length: number = 8): string {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  }

  /**
   * Random Alphabetic String
   */
  public static randomText(prefix: string = "Test"): string {
    return `${prefix}_${this.randomString(6)}`;
  }

  /**
   * Random Email
   */
  public static email(): string {
    return `user_${Date.now()}@gmail.com`;
  }

  /**
   * Random Username
   */
  public static username(): string {
    return `user_${this.randomString(6)}`;
  }

  /**
   * Random Password
   */
  public static password(): string {
    return `Pass@${this.randomNumber()}`;
  }

  /**
   * Random Phone Number
   */
  public static phone(): string {
    return `9${this.randomNumber(100000000, 999999999)}`;
  }

  /**
   * Random Product Name
   */
  public static productName(): string {
    return `Product_${this.randomString(5)}`;
  }

  /**
   * Random Company Name
   */
  public static companyName(): string {
    return `Company_${this.randomString(4)}`;
  }

  /**
   * Random Category
   */
  public static category(): string {
    const categories = ["Electronics", "Furniture", "Groceries", "Beauty", "Fashion"];

    return categories[Math.floor(Math.random() * categories.length)];
  }

  /**
   * Random Boolean
   */
  public static boolean(): boolean {
    return Math.random() < 0.5;
  }

  /**
   * UUID
   */
  public static uuid(): string {
    return crypto.randomUUID();
  }
}
