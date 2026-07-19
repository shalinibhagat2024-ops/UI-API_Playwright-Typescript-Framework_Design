import * as allure from "allure-js-commons";

export class MetadataHelper {
  public static async epic(name: string): Promise<void> {
    await allure.epic(name);
  }

  public static async feature(name: string): Promise<void> {
    await allure.feature(name);
  }

  public static async story(name: string): Promise<void> {
    await allure.story(name);
  }

  public static async owner(name: string): Promise<void> {
    await allure.owner(name);
  }

  public static async severity(
    level: "blocker" | "critical" | "normal" | "minor" | "trivial"
  ): Promise<void> {
    await allure.severity(level);
  }

  public static async tag(...tags: string[]): Promise<void> {
    for (const tag of tags) {
      await allure.tag(tag);
    }
  }
}
