export class SensitiveDataMasker {
  private static readonly sensitiveKeys = [
    "password",

    "token",

    "accessToken",

    "refreshToken",

    "authorization",
  ];

  public static mask(data: unknown): unknown {
    if (data === null || data === undefined || typeof data !== "object") {
      return data;
    }

    const clone = structuredClone(data);

    this.maskRecursive(clone as Record<string, unknown>);

    return clone;
  }

  private static maskRecursive(object: Record<string, unknown>): void {
    Object.keys(object).forEach((key) => {
      const value = object[key];

      if (this.sensitiveKeys.includes(key.toLowerCase())) {
        object[key] = "********";
      } else if (value && typeof value === "object") {
        this.maskRecursive(value as Record<string, unknown>);
      }
    });
  }
}
