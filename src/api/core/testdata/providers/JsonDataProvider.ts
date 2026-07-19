import { IDataProvider } from "@api/core/testdata/providers/IDataProvider";
import fs from "fs/promises";
import path from "path";

export class JsonProvider<T> implements IDataProvider<T> {
  public async read(filePath: string): Promise<T> {
    const absolutePath = path.resolve(process.cwd(), "src", "resources", "api", filePath);

    const content = await fs.readFile(absolutePath, "utf8");

    return JSON.parse(content) as T;
  }
}
