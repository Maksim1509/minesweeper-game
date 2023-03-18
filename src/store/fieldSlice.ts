import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createField } from '../utils';

const initialState = createField([4, 4]);

const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    openCell(state, action: PayloadAction<number[]>) {
      const [y, x] = action.payload;
      state[y][x].isHide = false;
    },
  },
});

export const { openCell } = fieldSlice.actions;
export default fieldSlice.reducer;
