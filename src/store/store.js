import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices/counterSlice";
import cartReducer from "./slices/cart/cart";

// to combine reducers to make a complete store and export in the index.js react-redux provider
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});
