import Header from '../Header/Header';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useTimer from '../Field/Timer/useTimer';
import { useAppSelector } from '../../hooks/hooks';
import { Status } from '../../store/gameSlice';
import { getLsResults } from '../../utils';
import { RESULTS } from '../../constants';

const Layout = () => {
  const { status, mode } = useAppSelector((state) => state.gameInfo);
  const time = useTimer(status);
  useEffect(() => {
    if (status === Status.win) {
      const newResult = { time, mode };
      const results = getLsResults();
      results.push(newResult);
      results.sort((a, b) => a.time - b.time);
      localStorage.setItem(RESULTS, JSON.stringify(results.slice(0, 10)));
    }
  }, [status]);
  return (
    <>
      <Header />
      <main className="main container">
        <Outlet context={[time]} />
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default Layout;
