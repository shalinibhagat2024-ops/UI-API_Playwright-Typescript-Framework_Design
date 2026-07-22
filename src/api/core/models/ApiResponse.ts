export class ApiResponse<T> {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly headers: Record<string, string>,
    public readonly body: T,
    public readonly duration: number
  ) {}

  /**
   * Returns true if response is 2xx
   */
  public get isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }

  /**
   * Returns true if response is 4xx
   */
  public get isClientError(): boolean {
    return this.status >= 400 && this.status < 500;
  }

  /**
   * Returns true if response is 5xx
   */
  public get isServerError(): boolean {
    return this.status >= 500;
  }

  /**
   * Returns true if response is redirected
   */
  public get isRedirect(): boolean {
    return this.status >= 300 && this.status < 400;
  }

  /**
   * Returns true if body exists
   */
  public get hasBody(): boolean {
    return this.body !== null && this.body !== undefined;
  }

  /**
   * Returns Content-Type header
   */
  public get contentType(): string | undefined {
    return this.headers["content-type"];
  }

  /**
   * Returns response size if Content-Length exists
   */
  public get contentLength(): number {
    return Number(this.headers["content-length"] ?? 0);
  }

  /**
   * Get a header value (case-insensitive)
   */
  public getHeader(name: string): string | undefined {
    const key = Object.keys(this.headers).find((h) => h.toLowerCase() === name.toLowerCase());

    return key ? this.headers[key] : undefined;
  }

  /**
   * Checks if a header exists
   */
  public hasHeader(name: string): boolean {
    return this.getHeader(name) !== undefined;
  }

  /**
   * Pretty print for logging
   */
  public toString(): string {
    return [
      `Status      : ${this.status} ${this.statusText}`,
      `Duration    : ${this.duration} ms`,
      `ContentType : ${this.contentType ?? "Unknown"}`,
    ].join("\n");
  }

  /**
   * Convert to JSON for reporting
   */
  public toJSON() {
    return {
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      body: this.body,
      duration: this.duration,
    };
  }
}
