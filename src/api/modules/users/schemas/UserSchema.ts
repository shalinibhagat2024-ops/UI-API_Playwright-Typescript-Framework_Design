export const UserSchema = {
  type: "object",

  required: ["id", "firstName", "lastName", "age", "gender", "email", "phone"],

  properties: {
    id: {
      type: "number",
    },

    firstName: {
      type: "string",
    },

    lastName: {
      type: "string",
    },

    age: {
      type: "number",
    },

    gender: {
      type: "string",
    },

    email: {
      type: "string",
    },

    phone: {
      type: "string",
    },
  },
} as const;
