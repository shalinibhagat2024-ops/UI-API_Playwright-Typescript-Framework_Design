import { CartAssertions } from "@api/modules/carts/assertions/CartAssertions";
import { CartBuilder } from "@api/modules/carts/builders/CartBuilder";
import { CartResponse } from "@api/modules/carts/models/CartResponse";
import { UserAssertions } from "@api/modules/users/assertions/UserAssertions";
import { UserResponse } from "@api/modules/users/models/UserResponse";
import { StatusAssertions } from "@api/shared/assertions/StatusAssertions";
import { ResponseUtil } from "@api/shared/utils/ResponseUtil";
import { test } from "@fixtures/api.fixture";

test("Workflow - User Creates Cart", async ({
  userService,

  cartService,
}) => {
  // Step 1 - Get User

  const userResponse = await userService.getUserById(1);

  StatusAssertions.verify200(userResponse);

  const user = await ResponseUtil.json<UserResponse>(userResponse);

  UserAssertions.verifyUser(user);

  // Step 2 - Create Cart

  const cartRequest = CartBuilder.create().withUser(user.id).build();

  const cartResponse = await cartService.addCart(cartRequest);

  const cart = await ResponseUtil.json<CartResponse>(cartResponse);

  CartAssertions.verifyCartCreatedForUser(cartResponse, cart, user);
});
