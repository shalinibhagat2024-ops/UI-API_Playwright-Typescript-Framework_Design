import fs from "fs";

export class FileUtil {
  public static exists(path: string): boolean {
    return fs.existsSync(path);
  }

  public static read(path: string): string {
    return fs.readFileSync(path, "utf-8");
  }

  public static write(path: string, content: string): void {
    fs.writeFileSync(path, content);
  }
}
