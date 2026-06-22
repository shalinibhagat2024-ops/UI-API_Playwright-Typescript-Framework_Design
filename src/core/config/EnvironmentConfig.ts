export interface EnvironmentConfig {

    application: {
        baseUrl: string;
    };

    api: {
        baseUrl: string;
    };

    browser: {
        name: string;
        headless: boolean;
    };

    execution: {
        timeout: number;
        retries: number;
        workers: number;
    };

    reporting: {
        screenshot: "off" | "on" | "only-on-failure";
        video: "off" | "on" | "retain-on-failure";
        trace: "off" | "on" | "retain-on-failure";
    };
}