import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav__link nav__link_active' : 'nav__link';

const Header = () => (
  <header className="header">
    <nav className="nav container">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={'/'} className={setActive}>
            Game
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={'/result'} className={setActive}>
            Results
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
