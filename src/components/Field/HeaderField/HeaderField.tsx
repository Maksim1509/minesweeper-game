import React from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import './HeaderField.scss';
import { restart, Status } from '../../../store/gameSlice';

const HeaderField = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.gameInfo);
  const handleRestart = () => {
    dispatch(restart());
  };
  const iconClass = {
    ['header-field__icon']: true,
    ['header-field__icon_lose']: status === Status.lose,
    ['header-field__icon_win']: status === Status.win,
  };
  return (
    <section className="header-field">
      <div className={clsx(iconClass)} onClick={handleRestart}></div>
    </section>
  );
};

export default HeaderField;
