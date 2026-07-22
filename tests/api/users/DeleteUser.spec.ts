import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { test } from "@fixtures/api.fixture";

test("Delete User", { tag: ["@api", "@sanity", "@apiUser", "@p2"] }, async ({ userService }) => {
  const response = await userService.deleteUser(1);
  StatusAssertions.verify200(response);
});
