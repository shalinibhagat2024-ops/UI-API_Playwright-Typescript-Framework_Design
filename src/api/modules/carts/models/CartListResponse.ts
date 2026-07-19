import { CartResponse } from "@api/modules/carts/models/CartResponse";

export interface CartListResponse {
  carts: CartResponse[];

  total: number;

  skip: number;

  limit: number;
}
