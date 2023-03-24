import React, { useEffect } from 'react';
import { RESULTS } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Status, timeOver } from '../../../store/gameSlice';
import { getLsResults } from '../../../utils';
import { parseTime } from './parseTime';
import useTimer from './useTimer';

const Timer = () => {
  const {
    timer: initTime,
    status,
    mode,
  } = useAppSelector((state) => state.gameInfo);
  const dispatch = useAppDispatch();

  const onTimeOver = () => {
    dispatch(timeOver());
  };

  const time = useTimer({ initTime, status, onTimeOver });

  useEffect(() => {
    if (status === Status.win) {
      const newResult = { time: initTime - time, mode };
      const results = getLsResults();
      results.push(newResult);
      results.sort((a, b) => a.time - b.time);
      localStorage.setItem(RESULTS, JSON.stringify(results.slice(0, 10)));
    }
  }, [status]);

  return <section className="timer">{parseTime(time)}</section>;
};

export default Timer;
