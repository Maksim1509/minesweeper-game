import React, { useEffect, useRef, useState } from 'react';
import { MODE } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Mode, Status, timeOver } from '../../../store/gameSlice';
import { parseTime } from './parseTime';
import './Timer.scss';
import useTimer from './useTimer';

const Timer = () => {
  const { timer: initTime, status } = useAppSelector((state) => state.gameInfo);
  const dispatch = useAppDispatch();

  const onTimeOver = () => {
    dispatch(timeOver());
  };
  // const timeRef = useRef<number>(initTime);

  // useEffect(() => {
  //   console.log(timeRef.current);

  //   const timerId = setInterval(() => {
  //     if (status === Status.running) timeRef.current -= 1;
  //     console.log(timeRef.current);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [timeRef.current, status]);
  const timer = useTimer({ initTime, status, onTimeOver });
  return <section className="timer">{parseTime(timer)}</section>;
};

export default Timer;
