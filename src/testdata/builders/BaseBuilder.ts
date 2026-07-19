export abstract class BaseBuilder<T> {
  protected abstract readonly model: T;

  /**
   * Build Domain Object
   */
  public build(): T {
    return structuredClone(this.model);
  }
}
