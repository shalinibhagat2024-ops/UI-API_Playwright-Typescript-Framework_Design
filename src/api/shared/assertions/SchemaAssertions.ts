import { SchemaValidator } from "@api/shared/validators/SchemaValidator";

export class SchemaAssertions {
  static validate(schema: object, response: unknown): void {
    SchemaValidator.validate(
      schema,

      response
    );
  }
}
