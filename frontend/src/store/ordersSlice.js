import { createSlice } from '@reduxjs/toolkit';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    setOrders: (state, action) => {
      state.items = action.payload;
    },
    removeOrder: (state, action) => {
      state.items = state.items.filter(order => order.id !== action.payload);
    },
  },
});

export const { setOrders, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;