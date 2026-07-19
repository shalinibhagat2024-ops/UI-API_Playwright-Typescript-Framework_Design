import { CartSchema } from "@api/modules/carts/schemas/CartSchema";

export const CartListSchema = {
  type: "object",

  required: ["carts", "total", "skip", "limit"],

  properties: {
    carts: {
      type: "array",

      minItems: 1,

      items: CartSchema,
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
