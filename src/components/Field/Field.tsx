import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openCell } from '../../store/gameSlice';
import './Field.scss';

const Field = () => {
  const dispatch = useAppDispatch();
  const { field } = useAppSelector((state) => state.gameInfo);

  const handleClick = (y: number, x: number) => {
    dispatch(openCell([y, x]));
  };

  const renderField = () =>
    field.map((row, y) => (
      <div key={y} className="field__row">
        {row.map((cell, x) => (
          <div
            key={x}
            className={`field__ceil ${cell.mark}`}
            onClick={() => handleClick(y, x)}
          >
            {cell.value}
            <div className={`${cell.isHide ? 'hide' : ''}`}></div>
          </div>
        ))}
      </div>
    ));
  return <section className="field">{renderField()}</section>;
};

export default Field;
