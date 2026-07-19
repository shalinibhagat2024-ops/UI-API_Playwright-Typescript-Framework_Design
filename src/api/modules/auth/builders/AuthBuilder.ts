import { LoginRequest } from "@api/modules/auth/models/LoginRequest";

export class AuthBuilder {
  static defaultLogin(): LoginRequest {
    return {
      username: "emilys",

      password: "emilyspass",

      expiresInMins: 30,
    };
  }
}
