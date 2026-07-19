import { CsvProvider } from "@api/core/testdata/providers/CsvDataProvider";
import { FakerProvider } from "@api/core/testdata/providers/FakerDataProvider";
import { JsonProvider } from "@api/core/testdata/providers/JsonDataProvider";

export class TestData {
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
