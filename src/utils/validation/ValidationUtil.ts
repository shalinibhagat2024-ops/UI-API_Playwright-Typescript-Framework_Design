export class ValidationUtil {
  public static isNull(value: unknown): boolean {
    return value === null || value === undefined;
  }

  public static isEmpty(value: string): boolean {
    return value.trim().length === 0;
  }

  public static isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
}
