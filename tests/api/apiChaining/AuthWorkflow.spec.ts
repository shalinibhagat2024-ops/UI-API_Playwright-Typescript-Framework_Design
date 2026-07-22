import { AuthAssertions } from "@api/modules/auth/assertions/AuthAssertions";
import { AuthBuilder } from "@api/modules/auth/builders/AuthBuilder";
import { CurrentUserResponse } from "@api/modules/auth/models/CurrentUserResponse";
import { LoginResponse } from "@api/modules/auth/models/LoginResponse";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test(
  "Workflow - Authenticate User",
  { tag: ["@api", "@sanity", "@apiChainWorkflow", "@p1"] },
  async ({ authService }) => {
    /*
     Step 1 - Login
    */

    const loginRequest = AuthBuilder.defaultLogin();
    const loginResponse = await authService.login(loginRequest);
    StatusAssertions.verify200(loginResponse);
    const login = await ResponseUtil.json<LoginResponse>(loginResponse);
    AuthAssertions.verifyLogin(loginResponse, login);

    /*
      Step 2 - Get Current User
    */

    const currentUserResponse = await authService.getCurrentUser(login.accessToken);
    StatusAssertions.verify200(currentUserResponse);
    const currentUser = await ResponseUtil.json<CurrentUserResponse>(currentUserResponse);

    /*
     Step 3 - Validate Workflow
    */
    AuthAssertions.verifyAuthenticatedUser(login, currentUser);
  }
);
