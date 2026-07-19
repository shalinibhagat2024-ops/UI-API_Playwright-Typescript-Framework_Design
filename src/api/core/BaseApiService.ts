import { ApiClient } from "@api/core/ApiClient";

export abstract class BaseApiService {
  constructor(protected readonly apiClient: ApiClient) {}
}
