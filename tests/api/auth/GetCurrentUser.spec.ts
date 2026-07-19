import { AuthBuilder } from "@api/modules/auth/builders/AuthBuilder";
import { LoginResponse } from "@api/modules/auth/models/LoginResponse";
import { CommonAssertions } from "@api/shared/assertions/CommonAssertions";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("GET - Current User", async ({ authService }) => {
  const loginResponse = await authService.login(AuthBuilder.defaultLogin());

  const login = await ResponseUtil.json<LoginResponse>(loginResponse);

  const response = await authService.getCurrentUser(login.accessToken);

  const user = await ResponseUtil.json<LoginResponse>(response);

  CommonAssertions.verifyId(user.id);
});
