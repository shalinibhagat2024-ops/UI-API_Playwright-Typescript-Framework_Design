import { Environment } from "@core/config/Environment";
import fs from "fs";
import path from "path";

export class JsonConfigLoader {
  public static load(): Environment {
    const environment = process.env.ENV ?? "qa";

    const profile = process.env.CI ? `${environment}-ci` : environment;

    const filePath = path.resolve(
      process.cwd(),
      "src",
      "resources",
      "envirornment",
      `${profile}.json`
    );

    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Environment;
  }
}
