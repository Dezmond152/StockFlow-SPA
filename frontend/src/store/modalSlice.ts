import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ModalState = {
  isOpen: boolean;
  itemToDelete: number | null;
};

const initialState: ModalState = {
  isOpen: false,
  itemToDelete: null,
};

const modalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
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