import fs from "fs";
import path from "path";

export class FileLogger {
  private static readonly logDirectory = path.resolve(process.cwd(), "logs");

  public static write(message: string): void {
    if (!fs.existsSync(this.logDirectory)) {
      fs.mkdirSync(this.logDirectory);
    }

    const fileName = `${new Date().toISOString().split("T")[0]}.log`;

    const filePath = path.join(this.logDirectory, fileName);

    fs.appendFileSync(filePath, message + "\n");
  }
}
