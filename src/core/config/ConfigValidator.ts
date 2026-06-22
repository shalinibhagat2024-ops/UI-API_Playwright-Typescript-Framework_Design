import { EnvironmentConfig } from "./EnvironmentConfig";

export class ConfigValidator {

    public static validate(config: EnvironmentConfig): void {

        if (!config.application.baseUrl) {
            throw new Error("Application Base URL is missing.");
        }

        if (!config.api.baseUrl) {
            throw new Error("API Base URL is missing.");
        }

        if (!config.browser.name) {
            throw new Error("Browser name is missing.");
        }

        if (config.execution.timeout <= 0) {
            throw new Error("Execution timeout must be greater than zero.");
        }

        if (config.execution.workers <= 0) {
            throw new Error("Workers must be greater than zero.");
        }

    }

}