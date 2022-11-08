import { createSlice } from '@reduxjs/toolkit';

import { FilterState } from './types';

const initialState: FilterState = {
  filterItems: ['Все'],
  activeFilter: 'Все',
};

const filterSlice = createSlice({
  name: 'langMenu',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filterItems = action.payload;
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const { setActiveFilter, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
