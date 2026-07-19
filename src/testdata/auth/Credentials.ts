import { LoginRequest } from "@api/modules/auth/models/LoginRequest";

export class Credentials {
  public static readonly VALID_USER: LoginRequest = {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  };

  public static readonly INVALID_USER: LoginRequest = {
    username: "invalid",
    password: "invalid",
  };
}
