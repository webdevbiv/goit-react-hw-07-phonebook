import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  getContacts,
  deleteContact,
} from '../services/contactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/get', async () => {
  try {
    const contacts = await getContacts();
    return contacts;
  } catch (error) {
    console.error(error);
    return error.message;
  }
});

export const addContactThunk = createAsyncThunk('contacts/add', async data => {
  try {
    const res = await addContact(data);
    return res;
  } catch (error) {
    console.error(error);
    return error.message;
  }
});

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async id => {
    try {
      const deletedId = await deleteContact(id);
      return deletedId;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }
);
