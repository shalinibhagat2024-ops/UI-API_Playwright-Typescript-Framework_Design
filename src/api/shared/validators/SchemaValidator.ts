import Ajv from "ajv";

export class SchemaValidator {
  private static readonly ajv = new Ajv({
    allErrors: true,

    strict: false,
  });

  static validate(schema: object, data: unknown): void {
    const validate = this.ajv.compile(schema);

    const valid = validate(data);

    if (!valid) {
      const errors = validate.errors
        ?.map((error) => `${error.instancePath} ${error.message}`)
        .join("\n");

      throw new Error(`Schema Validation Failed\n\n${errors}`);
    }
  }
}
