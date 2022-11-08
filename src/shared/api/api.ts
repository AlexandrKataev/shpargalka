import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { ItemType } from './types';

export const fetchItems = createAsyncThunk<ItemType[]>('item/fetchItemStatus', async () => {
  const response = await axios.get<ItemType[]>(`https://6367d292d1d09a8fa61b5b19.mockapi.io/data`);
  return response.data;
});
