import { IDataProvider } from "@api/core/data/providers/IDataProvider";
import path from "path";
import * as XLSX from "xlsx";

export class ExcelProvider<T> implements IDataProvider<T[]> {
  public async read(filePath: string): Promise<T[]> {
    const absolutePath = path.resolve(process.cwd(), "testdata", "excel", filePath);

    const workbook = XLSX.readFile(absolutePath);

    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    return XLSX.utils.sheet_to_json<T>(sheet);
  }
}
