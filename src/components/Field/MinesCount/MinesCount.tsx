import React from 'react';
import { MODE } from '../../../constants';
import { useAppSelector } from '../../../hooks/hooks';
import { Mark } from '../../../types/types';

const MinesCount = () => {
  const { mode, field } = useAppSelector((state) => state.gameInfo);
  const { MINE_COUNT } = MODE[mode];
  let restMines = MINE_COUNT;
  field.forEach((row) =>
    row.forEach((cell) => {
      if (cell.mark === Mark.flag) restMines -= 1;
    })
  );
  if (restMines < 0) restMines = 0;
  return (
    <section className="mines-count">{`000${restMines}`.slice(-4)}</section>
  );
};

export default MinesCount;
