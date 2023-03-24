import { useState, useEffect } from 'react';
import { Status } from '../../../store/gameSlice';

interface IUseTimer {
  initTime: number;
  status: Status;
  onTimeOver: () => void;
}

const useTimer = (params: IUseTimer) => {
  const { initTime, status, onTimeOver } = params;
  const [time, setTime] = useState(() => initTime);
  const [timerId, setTimerId] = useState<number>();

  const startTimer = () => {
    const id = setTimeout(() => {
      if (time === 0) {
        onTimeOver();
        return;
      }
      setTime((prev) => prev - 1);
    }, 1000);
    setTimerId(id);
  };

  useEffect(() => {
    if (status === Status.idle) setTime(() => initTime);
  }, [initTime, status]);

  useEffect(() => {
    if (status === Status.running) startTimer();
    return () => clearTimeout(timerId);
  }, [time, initTime, status]);
  return time;
};

export default useTimer;
