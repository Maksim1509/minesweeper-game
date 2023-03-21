import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import Cell from './Cell/Cell';
import HeaderField from './HeaderField/HeaderField';
import './Field.scss';

const Field = () => {
  const { field } = useAppSelector((state) => state.gameInfo);

  const renderField = () =>
    field.map((row, y) => (
      <div key={y} className="field__row">
        {row.map((cell, x) => (
          <Cell key={x} cellData={cell} x={x} y={y} />
        ))}
      </div>
    ));

  return (
    <section className="field">
      <HeaderField />
      {renderField()}
    </section>
  );
};

export default Field;
