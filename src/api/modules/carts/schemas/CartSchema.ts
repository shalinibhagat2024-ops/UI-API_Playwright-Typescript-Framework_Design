export const CartSchema = {
  type: "object",

  required: [
    "id",
    "userId",
    "products",
    "total",
    "discountedTotal",
    "totalProducts",
    "totalQuantity",
  ],

  properties: {
    id: {
      type: "number",
    },

    userId: {
      type: "number",
    },

    total: {
      type: "number",
    },

    discountedTotal: {
      type: "number",
    },

    totalProducts: {
      type: "number",
    },

    totalQuantity: {
      type: "number",
    },

    products: {
      type: "array",

      minItems: 1,

      items: {
        type: "object",

        required: ["id", "title", "price", "quantity", "total"],

        properties: {
          id: {
            type: "number",
          },

          title: {
            type: "string",
          },

          price: {
            type: "number",
          },

          quantity: {
            type: "number",
          },

          total: {
            type: "number",
          },
        },
      },
    },
  },
} as const;
