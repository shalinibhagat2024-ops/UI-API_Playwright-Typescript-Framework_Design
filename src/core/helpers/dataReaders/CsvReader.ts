import fs from "fs";
import Papa from "papaparse";
import path from "path";

export class CsvReader {
  public static read<T>(relativePath: string): T[] {
    const filePath = path.resolve(process.cwd(), "src", "resources", "csv", relativePath);
    const csv = fs.readFileSync(filePath, "utf8");
    return Papa.parse<T>(csv, { header: true, skipEmptyLines: true }).data;
  }
}
