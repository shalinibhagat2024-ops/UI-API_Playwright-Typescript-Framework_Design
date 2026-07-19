import { ConsoleLogger } from "@api/core/logging/ConsoleLogger";
import { FileLogger } from "@api/core/logging/FileLogger";
import { LogLevel } from "@api/core/logging/LogLevel";

export class Logger {
  private static log(level: LogLevel, message: string): void {
    const formatted = `[${new Date().toISOString()}] [${level}] ${message}`;

    ConsoleLogger.log(level, message);

    FileLogger.write(formatted);
  }

  static info(message: string): void {
    this.log(LogLevel.INFO, message);
  }

  static warn(message: string): void {
    this.log(LogLevel.WARN, message);
  }

  static error(message: string): void {
    this.log(LogLevel.ERROR, message);
  }

  static debug(message: string): void {
    this.log(LogLevel.DEBUG, message);
  }
}
