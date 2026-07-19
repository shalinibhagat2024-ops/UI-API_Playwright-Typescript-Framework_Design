export interface ApiResponseMetadata {
  status: number;

  statusText: string;

  duration: number;

  headers: Record<string, string>;

  contentType: string;

  responseBody?: unknown;
}
