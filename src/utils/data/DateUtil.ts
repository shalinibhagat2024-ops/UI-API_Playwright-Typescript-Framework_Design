export class DateUtil {
  /**
   * Current Date
   */
  public static today(): Date {
    return new Date();
  }

  /**
   * Current Timestamp
   */
  public static timestamp(): number {
    return Date.now();
  }

  /**
   * Current ISO Date
   */
  public static isoDate(): string {
    return new Date().toISOString();
  }

  /**
   * yyyy-MM-dd
   */
  public static currentDate(): string {
    return new Date().toISOString().split("T")[0];
  }

  /**
   * Add Days
   */
  public static addDays(days: number): string {
    const date = new Date();

    date.setDate(date.getDate() + days);

    return date.toISOString().split("T")[0];
  }

  /**
   * Minus Days
   */
  public static minusDays(days: number): string {
    const date = new Date();

    date.setDate(date.getDate() - days);

    return date.toISOString().split("T")[0];
  }

  /**
   * Current Time
   */
  public static currentTime(): string {
    return new Date().toLocaleTimeString();
  }
}
