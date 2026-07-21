import { UserAssertions } from "@api/modules/users/assertions/UserAssertions";
import { UserResponse } from "@api/modules/users/models/UserResponse";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("Update User", { tag: ["@api", "@sanity", "@apiUser", "@p2"] }, async ({ userService }) => {
  const response = await userService.updateUser(1, {
    firstName: "Enterprise User",
  });
  const user = await ResponseUtil.json<UserResponse>(response);
  UserAssertions.verifyUpdatedUser(response, user, "Enterprise User");
});
