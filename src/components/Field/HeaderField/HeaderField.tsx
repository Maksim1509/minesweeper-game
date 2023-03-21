import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import './HeaderField.scss';
import { restart, Status } from '../../../store/gameSlice';

const HeaderField = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.gameInfo);
  const handleRestart = () => {
    dispatch(restart());
  };
  return (
    <section className="field-header">
      <div
        className={`field-header__icon ${
          status === Status.lose ? 'field-header__icon_lose' : ''
        }`}
        onClick={handleRestart}
      ></div>
    </section>
  );
};

export default HeaderField;
