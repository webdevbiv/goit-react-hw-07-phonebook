import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const constactsSlice = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    addContact(state, action) {
      state.list = [...state.list, action.payload];
    },
    deleteContact(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  constactsSlice.reducer
);

export const { addContact, deleteContact } = constactsSlice.actions;
