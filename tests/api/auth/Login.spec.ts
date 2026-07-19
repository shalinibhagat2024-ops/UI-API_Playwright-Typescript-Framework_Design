import { AuthAssertions } from "@api/modules/auth/assertions/AuthAssertions";
import { AuthBuilder } from "@api/modules/auth/builders/AuthBuilder";
import { LoginResponse } from "@api/modules/auth/models/LoginResponse";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("POST - Login", async ({ authService }) => {
  const loginRequest = AuthBuilder.defaultLogin();

  const response = await authService.login(loginRequest);

  const loginResponse = await ResponseUtil.json<LoginResponse>(response);

  AuthAssertions.verifyLogin(response, loginResponse);
});
