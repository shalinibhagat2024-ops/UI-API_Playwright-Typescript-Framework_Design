import { ApiClient } from "src/api/core/ApiClient";
import { ProductCreateRequest } from "src/api/modules/products/models/ProductCreateRequest";
import { ProductUpdateRequest } from "src/api/modules/products/models/ProductUpdateRequest";
import { ApiEndpoints } from "src/api/shared/endpoints/ApiEndpoints";
import { BaseCrudService } from "src/api/shared/services/BaseCrudService";

export class ProductService extends BaseCrudService<ProductCreateRequest> {
  constructor(apiClient: ApiClient) {
    super(apiClient, ApiEndpoints.PRODUCTS.ALL);
  }

  async getAllProducts() {
    return this.getAll();
  }

  async getProductById(id: number) {
    return this.getById(id);
  }

  async addProduct(request: ProductCreateRequest) {
    return this.create(request);
  }

  async updateProduct(id: number, request: Partial<ProductUpdateRequest>) {
    return this.update(id, request);
  }

  async deleteProduct(id: number) {
    return this.delete(id);
  }

  async searchProducts(search: string) {
    return this.apiClient.get(ApiEndpoints.PRODUCTS.SEARCH, {
      queryParams: {
        q: search,
      },
    });
  }
}
