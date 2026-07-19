export interface IDataProvider<T> {
  read(filePath: string): Promise<T>;
}
