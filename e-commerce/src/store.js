import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth-slice";
import cartSlice from "./reducers/cart-clice";
import uiSlice from "./reducers/ui-slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});
export default store;
