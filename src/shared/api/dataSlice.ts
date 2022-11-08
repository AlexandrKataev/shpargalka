import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './api';
import { DataState, Status } from './types';

const initialState: DataState = {
  items: [],
  status: Status.LOADING, //   loading | success | error
};

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
