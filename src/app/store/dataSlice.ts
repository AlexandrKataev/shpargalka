import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type FetchItemsArgs = {
  theme: string;
};

export type ItemType = {
  id: string;
  title: string;
  descr: string;
  theme: string;
};

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface DataState {
  items: ItemType[];
  status: Status;
}

const initialState: DataState = {
  items: [],
  status: Status.LOADING, //   loading | success | error
};

export const fetchItems = createAsyncThunk<ItemType[], FetchItemsArgs>(
  'item/fetchItemStatus',
  async () => {
    const response = await axios.get<ItemType[]>(
      `https://6367d292d1d09a8fa61b5b19.mockapi.io/data`,
    );
    return response.data;
  },
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.items = []; //  на всякий случай
      state.status = Status.LOADING;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload; // здесь передаем в state загруженные пиццы
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = []; //  на всякий случай
    });
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
