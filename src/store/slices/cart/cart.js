import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existItem =
        state.cart.length > 0 &&
        state.cart.some((ele) => ele.id === actions.payload.id);

      if (existItem) {
        state.cart = [...state.cart];
      } else {
        state.cart = [...state.cart, actions.payload];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
