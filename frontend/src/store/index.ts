import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./ordersSlice.js";
import productsReducer from "./productsSlice.js";
import modalReducer from './modalSlice.js';

export const store = configureStore({
  reducer: {
    orders: ordersReducer, //orders: { items: [], status: "idle", error: null },
    products: productsReducer, //products: { items: [], status: "idle", error: null },
    deleteModal: modalReducer, //deleteModal: { isOpen: false, itemToDelete: null }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;