export interface CartProduct {
  id: number;

  quantity: number;
}

export interface CartRequest {
  userId: number;

  products: CartProduct[];
}
