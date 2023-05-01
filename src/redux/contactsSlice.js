import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, getContactsThunk, deleteContactThunk } from './thunk';

const handlePending = (state, _) => {
  state.isLoading = true;
};
const handleGetFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = payload;
  state.error = '';
  console.log(state.contacts);
};
const handlePostFulfilled = (state, { payload }) => {
  state.contacts.push(payload);
  state.isLoading = false;
};
const handleDeleteFulfilled = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
  state.isLoading = false;
  console.log(payload);
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleGetFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handlePostFulfilled)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = constactsSlice.reducer;
