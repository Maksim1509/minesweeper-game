import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { openCell } from '../../store/fieldSlice';
import './Field.scss';

const Field = () => {
  const dispatch = useAppDispatch();
  const { field } = useAppSelector((state) => state);

  const handleClick = (y: number, x: number) => {
    dispatch(openCell([y, x]));
  };

  const renderField = () =>
    field.map((row, y) => (
      <div key={y} className="field__row">
        {row.map((cell, x) => (
          <div
            key={x}
            className={`field__ceil ${cell.isHide ? 'hide' : ''} ${cell.mark}`}
            onClick={() => handleClick(y, x)}
          >
            {cell.value}
          </div>
        ))}
      </div>
    ));
  return <section className="field">{renderField()}</section>;
};

export default Field;
