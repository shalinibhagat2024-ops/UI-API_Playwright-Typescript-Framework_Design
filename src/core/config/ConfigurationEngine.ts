import { Environment } from "./Environment";
import { EnvironmentConfig } from "./EnvironmentConfig";
import { JsonConfigLoader } from "./JsonConfigLoader";
import { ConfigValidator } from "./ConfigValidator";
import { SecretLoader } from "./SecretLoader";

export class ConfigurationEngine {

    public static load(environment: Environment): EnvironmentConfig {

        const configuration = JsonConfigLoader.load(environment);

        ConfigValidator.validate(configuration);

        const secrets = SecretLoader.load();

        return {
            ...configuration,
            secrets
        } as EnvironmentConfig & { secrets: ReturnType<typeof SecretLoader.load> };

    }

}