import fs from "fs";
import path from "path";

export class JsonReader {
  public static read<T>(relativePath: string): T {
    const absolutePath = path.resolve(process.cwd(), "src", "resources", "ui", relativePath);
    const fileContent = fs.readFileSync(absolutePath, "utf8");
    return JSON.parse(fileContent) as T;
  }
}
