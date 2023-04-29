import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from '../services/contactsAPI';

export const getProductsThunk = createAsyncThunk('contacts/getAll', () =>
  getContacts()
);

console.log(getProductsThunk);
console.log(getContacts());
