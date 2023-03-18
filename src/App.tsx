import React, { useState } from 'react';
import { createField } from './utils';

/*
[
  [0, 1, 2, 3],    0
  [0, 1, 2, 3],    1
  [0, 1, 2, 3],    2
  [0, 1, 2, 3],    3
]

*/

const App = () => {
  const [field, setField] = useState(() => createField([4, 4]));
  const renderField = () =>
    field.map((row, i) => (
      <div key={i} className="field__row">
        {row.map((cell, i) => (
          <div
            key={i}
            className={`field__ceil ${cell.isHide ? 'hide' : ''} ${cell.mark}`}
          >
            {cell.value}
          </div>
        ))}
      </div>
    ));
  return <section className="field">{renderField()}</section>;
};

export default App;
