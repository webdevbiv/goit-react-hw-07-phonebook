import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  deleteContact,
} from '../services/contactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/get', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk('contacts/add', data =>
  addContact(data)
);

export const deleteContactThunk = createAsyncThunk('contacts/delete', id =>
  deleteContact(id)
);
