export class ApiResponse<T> {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly headers: Record<string, string>,
    public readonly body: T,
    public readonly duration: number
  ) {}

  public get isSuccess(): boolean {
    return this.status >= 200 && this.status < 300;
  }
}
