import { createSlice, current } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createField, getCellsAround } from '../utils';
import { ICell } from '../types/types';
import { MINE, MODE } from '../constants';

export enum Status {
  win = 'win',
  lose = 'lose',
  running = 'running',
}
export enum Mode {
  test = 'test',
  easy = 'easy',
  medium = 'medium',
  hard = 'hard',
}

interface GameState {
  status: Status;
  closedCellsCount: number;
  field: ICell[][];
  mode: Mode;
}

const initialState = {
  status: Status.running,
  closedCellsCount: MODE[Mode.test].size[0] * MODE[Mode.test].size[1],
  field: createField(MODE[Mode.test]),
  mode: Mode.test,
} as GameState;

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    restart(state) {
      const newField = createField(MODE[state.mode]) as ICell[][];
      state.field = newField;
      state.closedCellsCount =
        MODE[state.mode].size[0] * MODE[state.mode].size[1];
      state.status = Status.running;
    },
    changeMode(state, action) {
      const mode = action.payload as Mode;
      state.mode = mode;
      const newField = createField(MODE[mode]) as ICell[][];
      state.field = newField;
      state.closedCellsCount = MODE[mode].size[0] * MODE[mode].size[1];
      state.status = Status.running;
    },
    openCell(state, action: PayloadAction<number[]>) {
      const [y, x] = action.payload;
      if (state.field[y][x].value === MINE) {
        state.field[y][x].isHide = false;
        state.status = Status.lose;
        state.field.forEach((row) =>
          row.forEach((cell) => {
            if (cell.value === MINE) cell.isHide = false;
          })
        );
        return;
      }
      if (state.field[y][x].value !== 0) {
        state.field[y][x].isHide = false;
        state.closedCellsCount -= 1;
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

      if (state.closedCellsCount === MODE[state.mode].MINE_COUNT) {
        console.log(current);
        state.status = Status.win;
      }
    },
  },
});

export const { openCell, restart, changeMode } = gameSlice.actions;
export default gameSlice.reducer;
