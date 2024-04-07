import { createSlice } from "@reduxjs/toolkit";
import { Jersey } from "../data/jerseysData";

interface CartState {
  items: Jersey[];
  itemCount: number;
}

const initialState: CartState = {
  items: [],
  itemCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.itemCount += 1;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
        state.itemCount -= 1;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.itemCount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
