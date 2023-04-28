import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'services/contactsAPI';
import { getProductsThunk } from './thunk';

const handleFulfilledGet = (state, { payload }) => {
  state.list = payload;
};
const constactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder.addCase(getProductsThunk.fulfilled, handleFulfilledGet);
  },
});

export const contactsReducer = constactsSlice.reducer;
