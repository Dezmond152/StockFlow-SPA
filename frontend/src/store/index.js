import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice";
import productsReducer from "./productsSlice";
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    orders: ordersReducer, //orders: { items: [], status: "idle", error: null },
    products: productsReducer, //products: { items: [], status: "idle", error: null },
    deleteModal: modalReducer, //deleteModal: { isOpen: false, itemToDelete: null }
  },
});
