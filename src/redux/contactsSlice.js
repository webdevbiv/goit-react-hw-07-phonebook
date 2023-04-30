import { createSlice } from '@reduxjs/toolkit';
import { getContactsThunk } from './thunk';

const handleGetPending = (state, _) => {
  state.isLoading = true;
};
const handleGetFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
  console.log(state.contacts);
};
const handleGetRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },
  // reducers: {
  //   addContact(state, action) {
  //     state.list = [...state.list, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.list = state.list.filter(({ id }) => id !== action.payload);
  //   },
  // },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handleGetPending)
      .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
      .addCase(getContactsThunk.rejected, handleGetRejected);
  },
});

export const contactsReducer = constactsSlice.reducer;
export const { addContact, deleteContact } = constactsSlice.actions;
