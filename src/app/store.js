import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import logger from "redux-logger";
import cartCounter from "../middlewares/cartCounter";
import productsSlice from "../features/product/productsSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartCounter),
});
console.log(store.getState());

export default store;
