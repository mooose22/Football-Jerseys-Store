import { RootState } from "./store";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => {
    const itemPrice = parseFloat(item.price.replace("$", ""));

    return total + itemPrice;
  }, 0);
};
