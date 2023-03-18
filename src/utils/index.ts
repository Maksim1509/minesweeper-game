import { MINE } from '../constants';

export const createField = ([width, height]: [number, number]) => {
  const rows: null[] = Array(height).fill(null);
  const field = rows.map(() =>
    Array(width)
      .fill(null)
      .map(() => ({ value: 0, isHide: false, mark: '' }))
  );
  console.log(field);

  const increment = ([y, x]: number[]) => {
    if (field[y] === undefined) return;
    if (field[y][x] === undefined) return;
    if (field[y][x].value === -1) return;
    field[y][x].value++;
  };
  const MINE_COUNT = 4;
  for (let i = 0; i < MINE_COUNT; ) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    if (field[y][x].value === -1) continue;
    field[y][x].value = MINE;

    const topLeft = [y - 1, x - 1];
    const topCenter = [y - 1, x];
    const topRight = [y - 1, x + 1];

    const midLeft = [y, x - 1];
    const midRight = [y, x + 1];

    const botLeft = [y + 1, x - 1];
    const botCenter = [y + 1, x];
    const botRight = [y + 1, x + 1];

    increment(topLeft);
    increment(topCenter);
    increment(topRight);
    increment(midLeft);
    increment(midRight);
    increment(botLeft);
    increment(botCenter);
    increment(botRight);

    i += 1;
  }

  return field;
};
