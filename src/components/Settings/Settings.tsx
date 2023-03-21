import React from 'react';
import './Settings.scss';
import { changeMode, Mode } from '../../store/gameSlice';
import { useAppDispatch } from '../../hooks/hooks';

const Settings = () => {
  const dispatch = useAppDispatch();
  const handleChageMode = (mode: Mode) => {
    dispatch(changeMode(mode));
  };
  return (
    <section className="settings">
      <div
        className="settings__item"
        onClick={() => handleChageMode(Mode.easy)}
      >
        Easy
      </div>
      <div
        className="settings__item"
        onClick={() => handleChageMode(Mode.medium)}
      >
        Medium
      </div>
      <div
        className="settings__item"
        onClick={() => handleChageMode(Mode.hard)}
      >
        Hard
      </div>
      <div
        className="settings__item"
        onClick={() => handleChageMode(Mode.test)}
      >
        Test
      </div>
    </section>
  );
};

export default Settings;
