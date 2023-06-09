import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactThunk, getContactsThunk, deleteContactThunk } from './thunk';

const arrThunks = [addContactThunk, getContactsThunk, deleteContactThunk];
const allThunks = type => arrThunks.map(thunk => thunk[type]);

const handlePending = (state, _) => {
  state.isLoading = true;
};
const handleFulfilled = (state, _) => {
  state.isLoading = false;
  state.error = '';
};
const handleFulfilledGet = (state, { payload }) => {
  state.contacts = payload;
};
const handleFulfilledPost = (state, { payload }) => {
  state.contacts.push(payload);
};
const handleFulfilledDelete = (state, { payload }) => {
  state.contacts = state.contacts.filter(contact => contact.id !== payload);
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
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactThunk.fulfilled, handleFulfilledPost)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...allThunks('pending')), handlePending)
      .addMatcher(isAnyOf(...allThunks('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...allThunks('rejected')), handleRejected);
  },
});

export const contactsReducer = constactsSlice.reducer;
