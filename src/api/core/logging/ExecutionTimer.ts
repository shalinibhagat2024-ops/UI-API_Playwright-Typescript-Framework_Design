export class ExecutionTimer {
  private readonly started = performance.now();

  public stop(): number {
    return Math.round(performance.now() - this.started);
  }
}
