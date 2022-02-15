export const getShoppingCart = (state) =>
  Object.values(state.shoppingCart.shoppingCart);
export const getQuantiti = (state) => state.shoppingCart.quantiti