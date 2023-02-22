import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import cartUISlice from "./cartUISlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    ui: cartUISlice,
  },
});

export default store;
