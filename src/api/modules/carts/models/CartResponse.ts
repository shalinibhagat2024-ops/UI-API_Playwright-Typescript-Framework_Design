export interface CartProductResponse {
  id: number;

  title: string;

  price: number;

  quantity: number;

  total: number;

  discountPercentage: number;

  discountedTotal: number;
}

export interface CartResponse {
  id: number;

  userId: number;

  total: number;

  discountedTotal: number;

  totalProducts: number;

  totalQuantity: number;

  products: CartProductResponse[];
}
