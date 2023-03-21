import React from 'react';
import Field from '../../components/Field/Field';
import Settings from '../../components/Settings/Settings';
import './MainPage.scss';

const MainPage = () => (
  <section className="main-page container">
    <section className="main-page__settings">
      <Settings />
    </section>
    <div className="main-page__field">
      <Field />
    </div>
  </section>
);

export default MainPage;
