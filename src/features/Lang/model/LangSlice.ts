import { createSlice } from '@reduxjs/toolkit';

import { LangItems, LangState } from './types';

const initialState: LangState = {
  langItems: Object.values(LangItems),
  activeLang: LangItems.JS,
};

const langMenuSlice = createSlice({
  name: 'langMenu',
  initialState,
  reducers: {
    setActiveLang: (state, action) => {
      state.activeLang = action.payload;
    },
  },
});

export const { setActiveLang } = langMenuSlice.actions;
export default langMenuSlice.reducer;
