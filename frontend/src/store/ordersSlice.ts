import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Order } from "../types/order.types.ts";
import { deleteProduct } from "./productsSlice.js";

type OrdersState = {
  items: Order[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: OrdersState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchOrders = createAsyncThunk<Order[]>("orders/fetchOrders", async () => {
  const response = await axios.get<Order[]>("http://localhost:3001/api/orders");

  return response.data;
});

export const deleteOrder = createAsyncThunk<number, number>("orders/deleteOrder", async (id) => {
  const response = await axios.delete<{ id: number }>(`http://localhost:3001/api/orders/${id}`);

  return response.data.id;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchOrders.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.items = state.items.filter((order) => order.id !== action.payload);
      })

      .addCase(deleteOrder.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        const deletedProductId = action.payload;

        state.items.forEach((order) => {
          order.products = order.products.filter((product) => product.id !== deletedProductId);
        });
      });
  },
});

export default ordersSlice.reducer;
