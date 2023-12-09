import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from 'redux/auth/auth.reducer';

// const URL = 'https://65690616de53105b0dd6a6a4.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await instance.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const response = await instance.post('/contacts', newContact);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await instance.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);