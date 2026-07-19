import { UserSchema } from "@api/modules/users/schemas/UserSchema";

export const UserListSchema = {
  type: "object",

  required: ["users", "total", "skip", "limit"],

  properties: {
    users: {
      type: "array",

      minItems: 1,

      items: UserSchema,
    },

    total: {
      type: "number",
    },

    skip: {
      type: "number",
    },

    limit: {
      type: "number",
    },
  },
} as const;
