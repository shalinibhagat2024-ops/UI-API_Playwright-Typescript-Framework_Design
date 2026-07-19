import { UserResponse } from "@api/modules/users/models/UserResponse";

export interface UserListResponse {
  users: UserResponse[];

  total: number;

  skip: number;

  limit: number;
}
