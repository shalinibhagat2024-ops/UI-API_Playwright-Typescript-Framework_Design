import { ApiClient } from "@api/core/ApiClient";
import { UserRequest } from "@api/modules/users/models/UserRequest";
import { ApiEndpoints } from "src/api/shared/endpoints/ApiEndpoints";
import { BaseCrudService } from "src/api/shared/services/BaseCrudService";

export class UserService extends BaseCrudService<UserRequest> {
  constructor(apiClient: ApiClient) {
    super(apiClient, ApiEndpoints.USERS.ALL);
  }

  async getAllUsers() {
    return this.getAll();
  }

  async getUserById(id: number) {
    return this.getById(id);
  }

  async addUser(request: UserRequest) {
    return this.create(request);
  }

  async updateUser(id: number, request: Partial<UserRequest>) {
    return this.update(id, request);
  }

  async deleteUser(id: number) {
    return this.delete(id);
  }

  async searchUsers(query: string) {
    return this.apiClient.get(ApiEndpoints.USERS.SEARCH, {
      queryParams: {
        q: query,
      },
    });
  }
}
