export interface ProductCreateRequest {
  title: string;

  description: string;

  category: string;

  price: number;

  stock: number;

  brand?: string;

  rating?: number;

  discountPercentage?: number;
}
