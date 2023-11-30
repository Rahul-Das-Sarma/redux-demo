import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    multiplyBy10: (state) => {
      console.log("clicked");
      state.value = state.value * 10;
    },
  },
});

export const { increment, decrement, multiplyBy10 } = counterSlice.actions;

export default counterSlice.reducer;
