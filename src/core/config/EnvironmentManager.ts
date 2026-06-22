import { Environment } from "./Environment";
import { ConfigurationEngine } from "./ConfigurationEngine";

export class EnvironmentManager {

    private static readonly environment =
        (process.env.TEST_ENV as Environment) || Environment.QA;

    private static readonly configuration =
        ConfigurationEngine.load(this.environment);

    public static get config() {
        return this.configuration;
    }

    public static get currentEnvironment(): Environment {
        return this.environment;
    }

}