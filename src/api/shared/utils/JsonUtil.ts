export class JsonUtil {
  static pretty(json: unknown): string {
    return JSON.stringify(json, null, 2);
  }

  static stringify(json: unknown): string {
    return JSON.stringify(json);
  }

  static clone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
  }
}
