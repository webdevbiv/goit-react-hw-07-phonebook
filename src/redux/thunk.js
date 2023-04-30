import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from '../services/contactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

console.log(getContactsThunk);
console.log(getContacts());
