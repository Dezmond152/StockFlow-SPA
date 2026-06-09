import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axios.get("http://localhost:3001/api/orders");
  return response.data;
});

export const deleteOrder = createAsyncThunk("orders/deleteOrder", async (id) => {
  const response = await axios.delete(`http://localhost:3001/api/orders/${id}`);
  return response.data.id;
});

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
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
        state.error = action.error.message;
      })

      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.items = state.items.filter((order) => order.id !== action.payload);
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        alert(`Не удалось удалить ордер: ${action.error.message}`);
      });
  },
});

export default ordersSlice.reducer;
