import { createSlice } from '@reduxjs/toolkit';

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [], isLoading: false, error: null },
  reducers: {
    addContact(state, action) {
      state.list = [...state.list, action.payload];
    },
    deleteContact(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = constactsSlice.reducer;
export const { addContact, deleteContact } = constactsSlice.actions;
