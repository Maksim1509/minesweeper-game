import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createField, getCellsAround } from '../utils';
import { ICell } from '../types/types';
import { MINE } from '../constants';

export enum Status {
  win = 'win',
  lose = 'lose',
  running = 'running',
}

interface GameState {
  status: Status;
  closedCellsCount: number;
  field: ICell[][];
}

const initialState = {
  status: Status.running,
  closedCellsCount: 16,
  field: createField([4, 4]),
} as GameState;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    restart(state) {
      const newField = createField([4, 4]) as ICell[][];
      state.field = newField;
      state.closedCellsCount = 16;
      state.status = Status.running;
    },
    openCell(state, action: PayloadAction<number[]>) {
      const [y, x] = action.payload;
      if (state.field[y][x].value === MINE) {
        state.field[y][x].isHide = false;
        state.status = Status.lose;
        return;
      }
      if (state.field[y][x].value !== 0) {
        state.field[y][x].isHide = false;
        state.closedCellsCount -= 1;
        return;
      }

      const stackToOpen: [number, number][] = [[y, x]];

      const addToStackToOpen = ([y, x]: number[]) => {
        if (!state.field[y]) return;
        if (state.field[y][x] === undefined) return;
        if (state.field[y][x].isHide === false) return;
        if (state.field[y][x].value === MINE) return;
        stackToOpen.push([y, x]);
      };
      while (stackToOpen.length) {
        const [y, x] = stackToOpen.pop() as [number, number];
        if (state.field[y][x].isHide) state.closedCellsCount -= 1;
        state.field[y][x].isHide = false;
        if (state.field[y][x].value !== 0) continue;
        const cellsAround = getCellsAround([y, x]);
        addToStackToOpen(cellsAround.topLeft);
        addToStackToOpen(cellsAround.topCenter);
        addToStackToOpen(cellsAround.topRight);
        addToStackToOpen(cellsAround.midLeft);
        addToStackToOpen(cellsAround.midRight);
        addToStackToOpen(cellsAround.botLeft);
        addToStackToOpen(cellsAround.botCenter);
        addToStackToOpen(cellsAround.botRight);
      }

      if (state.closedCellsCount === 3 /* MINE_COUNT */) {
        state.status = Status.win;
      }
    },
  },
});

export const { openCell, restart } = gameSlice.actions;
export default gameSlice.reducer;
