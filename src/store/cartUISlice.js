import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice({
  name: "ui",
  initialState: { cartVisible: false },
  reducers: {
    toggle: (state) => {
      state.cartVisible = !state.cartVisible;
    },
  },
});

export const { toggle } = cartUISlice.actions;
export default cartUISlice.reducer;