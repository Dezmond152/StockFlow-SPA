import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Product } from "../types/product.types";
import { deleteOrder } from "./ordersSlice";

type ProductsState = {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>("products/fetchProducts", async () => {
  const response = await axios.get<Product[]>("http://localhost:3001/api/products");

  return response.data;
});

export const deleteProduct = createAsyncThunk<number, number>("products/deleteProduct", async (id) => {
  const response = await axios.delete<{ id: number }>(`http://localhost:3001/api/products/${id}`);

  return response.data.id;
});

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((product) => product.id !== action.payload);
      })

      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      })

      .addCase(deleteOrder.fulfilled, (state, action) => {
        const deletedOrderId = action.payload;

        state.items = state.items.filter((product) => product.order !== deletedOrderId);
      });
  },
});

export default productsSlice.reducer;
