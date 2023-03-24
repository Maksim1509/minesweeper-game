import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { timeOver } from '../../../store/gameSlice';
import { parseTime } from './parseTime';
import useTimer from './useTimer';

const Timer = () => {
  const { timer: initTime, status } = useAppSelector((state) => state.gameInfo);
  const dispatch = useAppDispatch();

  const onTimeOver = () => {
    dispatch(timeOver());
  };

  const timer = useTimer({ initTime, status, onTimeOver });
  return <section className="timer">{parseTime(timer)}</section>;
};

export default Timer;
