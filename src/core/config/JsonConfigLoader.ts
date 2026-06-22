import fs from "fs";
import path from "path";
import { Environment } from "./Environment";
import { EnvironmentConfig } from "./EnvironmentConfig";

export class JsonConfigLoader {

    public static load(environment: Environment): EnvironmentConfig {

        const configPath = path.resolve(
            process.cwd(),
            "config",
            "environments",
            `${environment}.json`
        );

        if (!fs.existsSync(configPath)) {
            throw new Error(`Configuration file not found: ${configPath}`);
        }

        const rawData = fs.readFileSync(configPath, "utf-8");

        return JSON.parse(rawData) as EnvironmentConfig;
    }
}