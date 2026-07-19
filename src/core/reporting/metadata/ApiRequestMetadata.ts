export interface ApiRequestMetadata {
  method: string;

  endpoint: string;

  headers?: Record<string, string>;

  queryParams?: Record<string, unknown>;

  requestBody?: unknown;
}
