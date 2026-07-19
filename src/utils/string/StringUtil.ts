export class StringUtil {
  public static capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  public static lower(text: string): string {
    return text.toLowerCase();
  }

  public static upper(text: string): string {
    return text.toUpperCase();
  }

  public static contains(source: string, value: string): boolean {
    return source.includes(value);
  }

  public static trim(text: string): string {
    return text.trim();
  }
}
