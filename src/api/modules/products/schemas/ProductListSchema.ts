import { ProductSchema } from "@api/modules/products/schemas/ProductSchema";

export const ProductListSchema = {
  type: "object",

  required: ["products", "total", "skip", "limit"],

  properties: {
    products: {
      type: "array",

      items: ProductSchema,
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
