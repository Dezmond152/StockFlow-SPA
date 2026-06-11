import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  itemToDelete: null,
};

const modalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.itemToDelete = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.itemToDelete = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;