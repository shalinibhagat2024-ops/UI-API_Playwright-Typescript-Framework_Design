import { CartListSchema } from "@api/modules/carts/schemas/CartListSchema";
import { CartSchema } from "@api/modules/carts/schemas/CartSchema";
import { ProductListSchema } from "@api/modules/products/schemas/ProductListSchema";
import { ProductSchema } from "@api/modules/products/schemas/ProductSchema";
import { UserListSchema } from "@api/modules/users/schemas/UserListSchema";
import { UserSchema } from "@api/modules/users/schemas/UserSchema";

export const Schemas = {
  Product: ProductSchema,
  ProductList: ProductListSchema,

  User: UserSchema,
  UserList: UserListSchema,

  Cart: CartSchema,
  CartList: CartListSchema,
} as const;
