export class JsonFormatter {
  public static format(data: unknown): string {
    if (data === undefined || data === null) {
      return "N/A";
    }

    return JSON.stringify(data, null, 4);
  }
}
