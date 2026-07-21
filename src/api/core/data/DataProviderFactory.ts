import { CsvProvider } from "@api/core/data/providers/CsvDataProvider";
import { FakerProvider } from "@api/core/data/providers/FakerDataProvider";
import { JsonProvider } from "@api/core/data/providers/JsonDataProvider";

export class DataProviderFactory {
  public static json<T>(): JsonProvider<T> {
    return new JsonProvider<T>();
  }

  public static csv<T>(): CsvProvider<T> {
    return new CsvProvider<T>();
  }

  public static faker(): FakerProvider {
    return new FakerProvider();
  }
}
