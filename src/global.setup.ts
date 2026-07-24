import { ReportInitializer } from "@core/reporting/ReportInitializer";

async function globalSetup(): Promise<void> {
  ReportInitializer.initialize();
}
export default globalSetup;
