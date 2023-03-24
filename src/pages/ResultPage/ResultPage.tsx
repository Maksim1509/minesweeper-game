import React from 'react';
import { parseTime } from '../../components/Field/Timer/parseTime';
import { getLsResults } from '../../utils';
import './ResultPage.scss';

const ResultPage = () => {
  const results = getLsResults();
  const resultsList = results.map((item, i) => (
    <li key={i}>
      {parseTime(item.time)} - {item.mode}
    </li>
  ));
  return (
    <section className="container result-page">
      <div>
        <h1>result page</h1>
        <ol>{resultsList}</ol>
      </div>
    </section>
  );
};

export default ResultPage;
