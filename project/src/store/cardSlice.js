import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    activate: (state) => {
      state.value = true;
    },
    deactivate: (state) => {
      state.value = false;
    },
  },
});

export const { activate, deactivate } = cardSlice.actions;

export default cardSlice.reducer;
