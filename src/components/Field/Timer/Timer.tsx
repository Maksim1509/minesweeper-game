import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { RESULTS } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Status } from '../../../store/gameSlice';
import { getLsResults } from '../../../utils';
import { parseTime } from './parseTime';
import useTimer from './useTimer';

const Timer = () => {
  const { status, mode } = useAppSelector((state) => state.gameInfo);

  const time = useOutletContext<number>();

  return <section className="timer">{parseTime(time)}</section>;
};

export default Timer;
