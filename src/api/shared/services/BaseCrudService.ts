import { ApiClient } from "@api/core/client/ApiClient";
import { BaseApiService } from "@api/shared/services/BaseApiService";

export abstract class BaseCrudService<TRequest> extends BaseApiService {
  constructor(
    apiClient: ApiClient,
    protected readonly endpoint: string
  ) {
    super(apiClient);
  }

  async getAll() {
    return this.apiClient.get(this.endpoint);
  }

  async getById(id: number) {
    return this.apiClient.get(`${this.endpoint}/${id}`);
  }

  async create(request: TRequest) {
    return this.apiClient.post(`${this.endpoint}/add`, request);
  }

  async update(id: number, request: Partial<TRequest>) {
    return this.apiClient.put(`${this.endpoint}/${id}`, request);
  }

  async delete(id: number) {
    return this.apiClient.delete(`${this.endpoint}/${id}`);
  }
}
