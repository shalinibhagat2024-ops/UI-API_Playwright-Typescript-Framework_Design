export interface RequestOptions {
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean>;
  //Request timeout (ms)
  timeout?: number;
}
