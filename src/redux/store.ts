import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
