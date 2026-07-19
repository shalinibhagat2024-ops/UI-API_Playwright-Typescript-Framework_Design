import { ApiClient } from "@api/core/ApiClient";
import { CartRequest } from "@api/modules/carts/models/CartRequest";
import { ApiEndpoints } from "src/api/shared/endpoints/ApiEndpoints";
import { BaseCrudService } from "src/api/shared/services/BaseCrudService";

export class CartService extends BaseCrudService<CartRequest> {
  constructor(apiClient: ApiClient) {
    super(
      apiClient,

      ApiEndpoints.CARTS.ALL
    );
  }

  async getAllCarts() {
    return this.getAll();
  }

  async getCartById(id: number) {
    return this.getById(id);
  }

  async addCart(request: CartRequest) {
    return this.create(request);
  }

  async updateCart(
    id: number,

    request: Partial<CartRequest>
  ) {
    return this.update(id, request);
  }

  async deleteCart(id: number) {
    return this.delete(id);
  }
}
