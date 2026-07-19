import { IDataProvider } from "@api/core/testdata/providers/IDataProvider";
import fs from "fs/promises";
import Papa from "papaparse";
import path from "path";

export class CsvProvider<T> implements IDataProvider<T[]> {
  public async read(filePath: string): Promise<T[]> {
    const absolutePath = path.resolve(process.cwd(), "testdata", "csv", filePath);

    const content = await fs.readFile(absolutePath, "utf8");

    const result = Papa.parse<T>(content, {
      header: true,
      skipEmptyLines: true,
    });

    return result.data;
  }
}
