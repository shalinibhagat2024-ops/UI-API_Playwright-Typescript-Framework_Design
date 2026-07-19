import { ProductResponse } from "@api/modules/products/models/ProductResponse";

export interface ProductListResponse {
  products: ProductResponse[];

  total: number;

  skip: number;

  limit: number;
}
