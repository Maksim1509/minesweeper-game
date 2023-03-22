import React from 'react';
import clsx from 'clsx';
import { useAppDispatch } from '../../../hooks/hooks';
import { mark, openCell } from '../../../store/gameSlice';
import { ICell, Mark } from '../../../types/types';
import './Cell.scss';

interface CellProps {
  cellData: ICell;
  x: number;
  y: number;
}

const Cell = (props: CellProps) => {
  const { cellData, x, y } = props;
  const dispatch = useAppDispatch();
  const handleClick = (y: number, x: number) => {
    dispatch(openCell([y, x]));
  };
  const handleMark = (y: number, x: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(mark([y, x]));
  };

  const cellClass = {
    cell: true,
    ['cell_mine']: cellData.value === -1,
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
      {!!cellData.value && cellData.value}
      <div className={clsx(hideClass)}>
        {cellData.isHide && cellData.mark === Mark.question && '❓'}
      </div>
    </div>
  );
};

export default Cell;
