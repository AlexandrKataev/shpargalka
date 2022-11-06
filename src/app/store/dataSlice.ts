import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [1, 2, 3],
  reducers: {
    setData: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
