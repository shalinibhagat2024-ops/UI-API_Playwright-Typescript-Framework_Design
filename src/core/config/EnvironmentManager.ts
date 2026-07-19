import { Environment } from "@core/config/Environment";
import { JsonConfigLoader } from "@core/config/JsonConfigLoader";
import { TestDataSource } from "@core/constants/TestDataSource";
import dotenv from "dotenv";
import path from "path";
import { LoginRequest } from "src/api/modules/auth/models/LoginRequest";

/**
 * Resolve Environment Profile
 *
 * Local:
 *      ENV=qa
 *      => qa.json
 *
 * GitHub Actions:
 *      ENV=qa
 *      CI=true
 *      => qa-ci.json
 */
const environment = process.env.ENV ?? "qa";

const profile = process.env.CI ? `${environment}-ci` : environment;

/**
 * Load Environment Variables
 */
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${environment}`),
  override: true,
});

export class EnvironmentManager {
  /**
   * Framework Configuration
   */
  private static readonly configuration: Environment = JsonConfigLoader.load();

  /**
   * Complete Configuration
   */
  public static getConfig(): Environment {
    return this.configuration;
  }

  /**
   * Current Environment
   */
  public static getCurrentEnvironment(): string {
    return this.configuration.environment;
  }

  /**
   * UI Base URL
   */
  public static getBaseUrl(): string {
    return this.configuration.baseUrl;
  }

  /**
   * API Base URL
   */
  public static getApiBaseUrl(): string {
    return this.configuration.apiBaseUrl;
  }

  /**
   * Browser Configuration
   */
  public static getBrowserConfig() {
    return this.configuration.browser;
  }

  /**
   * Execution Configuration
   */
  public static getExecutionConfig() {
    return this.configuration.execution;
  }

  /**
   * Reporting Configuration
   */
  public static getReportingConfig() {
    return this.configuration.reporting;
  }

  /**
   * Admin User
   */
  public static getAdminUser(): LoginRequest {
    return {
      username: process.env.ADMIN_USERNAME ?? "",
      password: process.env.ADMIN_PASSWORD ?? "",
      expiresInMins: 30,
    };
  }

  /**
   * Standard User
   */
  public static getStandardUser(): LoginRequest {
    return {
      username: process.env.STANDARD_USERNAME ?? "",
      password: process.env.STANDARD_PASSWORD ?? "",
      expiresInMins: 30,
    };
  }

  public static getTestDataSource(): TestDataSource {
    return this.configuration.testDataSource as TestDataSource;
  }

  public static getEnvironmentName(): string {
    return this.configuration.environment;
  }

  public static getApplicationName(): string {
    return this.configuration.applicationName;
  }

  public static isCI(): boolean {
    return process.env.CI === "true";
  }

  public static getBrowserName(): string {
    return this.configuration.browser.name;
  }

  public static getAdminUsername(): string {
    return process.env.ADMIN_USERNAME ?? "";
  }

  public static getAdminPassword(): string {
    return process.env.ADMIN_PASSWORD ?? "";
  }

  public static getStandardUsername(): string {
    return process.env.STANDARD_USERNAME ?? "";
  }

  public static getStandardPassword(): string {
    return process.env.STANDARD_PASSWORD ?? "";
  }
}
