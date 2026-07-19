export class TestSetup {
  public static async prepareCart(pages: any): Promise<void> {
    await pages.automationExercise.home.open();

    await pages.automationExercise.common.header.openCart();

    if (await pages.automationExercise.auth.cart.hasProducts()) {
      await pages.automationExercise.auth.cart.clearCart();
    }
    await pages.automationExercise.common.header.openProducts();
  }
}
