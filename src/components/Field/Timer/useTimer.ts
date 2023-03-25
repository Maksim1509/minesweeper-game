import { useState, useEffect, useRef } from 'react';
import { Status } from '../../../store/gameSlice';

const useTimer = (status: Status) => {
  const [time, setTime] = useState(0);
  const [timerId, setTimerId] = useState<number>();

  const startTimer = () => {
    const id = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setTimerId(id);
  };

  useEffect(() => {
    if (status === Status.idle) setTime(0);
    if (status === Status.running) startTimer();
    return () => {
      clearTimeout(timerId);
    };
  }, [time, status]);
  return time;
};

export default useTimer;
