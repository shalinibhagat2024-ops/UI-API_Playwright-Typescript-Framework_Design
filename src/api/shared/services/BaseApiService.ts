import { ApiClient } from "@api/core/client/ApiClient";

export abstract class BaseApiService {
  constructor(protected readonly apiClient: ApiClient) {}
}
