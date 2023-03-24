import { MINE } from '../constants';
import { IFieldInfo, Mark } from '../types/types';

export const getCellsAround = ([y, x]: [number, number]) => {
  return {
    topLeft: [y - 1, x - 1],
    topCenter: [y - 1, x],
    topRight: [y - 1, x + 1],
    midLeft: [y, x - 1],
    midRight: [y, x + 1],
    botLeft: [y + 1, x - 1],
    botCenter: [y + 1, x],
    botRight: [y + 1, x + 1],
  };
};

export const createField = (fieldInfo: IFieldInfo) => {
  const {
    size: [width, height],
    MINE_COUNT,
  } = fieldInfo;
  const rows: null[] = Array(height).fill(null);
  const field = rows.map(() =>
    Array(width)
      .fill(null)
      .map(() => ({ value: 0, isHide: true, mark: Mark.none }))
  );

  const increment = ([y, x]: number[]) => {
    if (field[y] === undefined) return;
    if (field[y][x] === undefined) return;
    if (field[y][x].value === -1) return;
    field[y][x].value++;
  };

  for (let i = 0; i < MINE_COUNT; ) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    if (field[y][x].value === -1) continue;
    field[y][x].value = MINE;

    const aroundCells = getCellsAround([y, x]);

    increment(aroundCells.topLeft);
    increment(aroundCells.topCenter);
    increment(aroundCells.topRight);
    increment(aroundCells.midLeft);
    increment(aroundCells.midRight);
    increment(aroundCells.botLeft);
    increment(aroundCells.botCenter);
    increment(aroundCells.botRight);

    i += 1;
  }

  return field;
};

export const changeMark = (mark: Mark): Mark => {
  const marksMap = {
    none: Mark.flag,
    flag: Mark.question,
    question: Mark.none,
  };
  return marksMap[mark];
};
