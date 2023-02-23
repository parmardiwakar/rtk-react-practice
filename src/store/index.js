import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import cartUISlice from "./cartUISlice";
import notificationSlice from "./notificationSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    ui: cartUISlice,
    notificationUI: notificationSlice,
  },
});

export default store;
