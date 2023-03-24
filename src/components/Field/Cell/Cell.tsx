import React from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { mark, Mode, openCell, Status } from '../../../store/gameSlice';
import { ICell, Mark } from '../../../types/types';
import './Cell.scss';

interface CellProps {
  cellData: ICell;
  x: number;
  y: number;
}
enum Colors {
  blue = 1,
  green,
  red,
  darkblue,
  brown,
  turquoise,
  black,
  white,
}

const Cell = (props: CellProps) => {
  const { cellData, x, y } = props;
  const dispatch = useAppDispatch();
  const { status, mode } = useAppSelector((state) => state.gameInfo);
  const handleClick = (y: number, x: number) => {
    if (status === Status.win || status === Status.lose) return;
    dispatch(openCell([y, x]));
  };
  const handleMark = (y: number, x: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (status === Status.win || status === Status.lose) return;
    dispatch(mark([y, x]));
  };

  const cellClass = {
    cell: true,
    ['cell_mine']: cellData.value === -1,
    [`cell_${Colors[cellData.value]}`]: cellData.value > 0,
    ['cell_mobile-medium']: mode === Mode.medium,
    ['cell_mobile-hard']: mode === Mode.hard,
  };

  const hideClass = {
    ['cell_hide']: cellData.isHide,
    ['cell_flag']: cellData.mark === Mark.flag,
    ['cell_question']: cellData.mark === Mark.question && cellData.isHide,
  };
  return (
    <div
      key={x}
      className={clsx(cellClass)}
      onClick={() => handleClick(y, x)}
      onContextMenu={handleMark(y, x)}
    >
      {cellData.value > 0 && cellData.value}
      <div className={clsx(hideClass)}>
        {cellData.isHide && cellData.mark === Mark.question && '❓'}
      </div>
    </div>
  );
};

export default Cell;
