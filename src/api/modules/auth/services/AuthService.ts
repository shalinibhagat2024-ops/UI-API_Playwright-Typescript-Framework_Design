import { LoginRequest } from "@api/modules/auth/models/LoginRequest";
import { BaseApiService } from "@api/shared/services/BaseApiService";
import { ApiEndpoints } from "src/api/shared/endpoints/ApiEndpoints";

export class AuthService extends BaseApiService {
  // constructor(apiClient: ApiClient) {
  //   super(apiClient);
  // }

  async login(request: LoginRequest) {
    return this.apiClient.post(ApiEndpoints.AUTH.LOGIN, request);
  }

  async getCurrentUser(token: string) {
    return this.apiClient.get(ApiEndpoints.AUTH.ME, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
