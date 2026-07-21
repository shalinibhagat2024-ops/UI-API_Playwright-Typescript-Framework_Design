import { UserAssertions } from "@api/modules/users/assertions/UserAssertions";
import { UserListResponse } from "@api/modules/users/models/UserListResponse";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("Search User", { tag: ["@api", "@sanity", "@apiUser", "@p2"] }, async ({ userService }) => {
  const response = await userService.searchUsers("John");
  const users = await ResponseUtil.json<UserListResponse>(response);
  UserAssertions.verifyUsersExist(users);
});
