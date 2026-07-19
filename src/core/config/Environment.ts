export interface Environment {
  environment: string;
  baseUrl: string;
  apiBaseUrl: string;
  applicationName: string;
  testDataSource: string;

  browser: {
    name: string;
    headless: boolean;
    slowMo: number;
  };

  execution: {
    workers: number;
    timeout: number;
    expectTimeout: number;
    retries: number;
  };

  reporting: {
    screenshot: string;
    video: string;
    trace: string;
  };
}
