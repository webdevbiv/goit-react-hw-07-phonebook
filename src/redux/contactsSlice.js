import { createSlice } from '@reduxjs/toolkit';

import { getProductsThunk } from './thunk';

const handleFulfilledGet = (state, { payload }) => {
  state.list = payload;
};

const constactsSlice = createSlice({
  name: 'contacts',
  reducers: {
    addContact(state, action) {
      state.list = [...state.list, action.payload];
    },
    deleteContact(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },

  initialState: { list: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(getProductsThunk.fulfilled, handleFulfilledGet);
  },
});

console.log(handleFulfilledGet);

export const contactsReducer = constactsSlice.reducer;
export const { addContact, deleteContact } = constactsSlice.actions;
