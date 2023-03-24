import Header from '../Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

class Layout extends React.Component {
  constructor(props = {}) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <>
        <Header />
        <main className="main container">
          <Outlet />
        </main>
        <footer className="footer"></footer>
      </>
    );
  }
}

export default Layout;
