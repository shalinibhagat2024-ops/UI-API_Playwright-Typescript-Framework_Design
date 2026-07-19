export abstract class BaseBuilder<T> {
  protected readonly data: T;

  protected constructor(defaultData: T) {
    this.data = this.clone(defaultData);
  }

  protected clone<K>(value: K): K {
    return JSON.parse(JSON.stringify(value));
  }

  build(): T {
    return this.clone(this.data);
  }
}
