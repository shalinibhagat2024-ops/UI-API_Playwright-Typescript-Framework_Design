/**
 * Loads secrets from environment variables.
 * Secrets should NEVER be stored in JSON files.
 */
export class SecretLoader {

    public static load() {

        return {

            username: process.env.APP_USERNAME ?? "",

            password: process.env.APP_PASSWORD ?? "",

            apiKey: process.env.API_KEY ?? "",

            bearerToken: process.env.BEARER_TOKEN ?? ""

        };

    }

}