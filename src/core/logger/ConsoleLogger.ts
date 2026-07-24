import { LogLevel } from "@core/logger/LogLevel";

export class ConsoleLogger {
  public static log(
    level: LogLevel,

    message: string
  ): void {
    console.log(`[${new Date().toISOString()}] [${level}] ${message}`);
  }
}
