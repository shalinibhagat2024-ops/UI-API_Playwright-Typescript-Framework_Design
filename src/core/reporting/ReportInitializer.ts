import { AllureCategories } from "src/core/reporting/config/AllureCategories";
import { AllureEnvironment } from "src/core/reporting/config/AllureEnvironment";
import { AllureExecutor } from "src/core/reporting/config/AllureExecutor";

export class ReportInitializer {
  public static initialize(): void {
    AllureEnvironment.generate();
    AllureExecutor.generate();
    AllureCategories.generate();
  }
}
