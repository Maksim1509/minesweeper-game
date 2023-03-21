import React from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { openCell } from '../../../store/gameSlice';
import { ICell } from '../../../types/types';
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
  return (
    <div
      key={x}
      className={`cell ${cellData.value === -1 ? 'cell_mine' : ''}`}
      onClick={() => handleClick(y, x)}
    >
      {!!cellData.value && cellData.value}
      <div className={`${cellData.isHide ? 'cell_hide' : ''}`}></div>
    </div>
  );
};

export default Cell;
