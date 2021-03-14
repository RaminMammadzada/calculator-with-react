import React, { useState, useCallback } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState([{
    total: null,
    next: null,
    operation: null,
  }]);

  const handleClick = useCallback(
    buttonName => {
      const { total, next, operation } = calculate(state, buttonName);
      setState({
        total,
        next,
        operation,
      });
    }, [state],
  );

  const { total, next } = state;
  return (
    <>
      <div className="calculator">
        <h1>Calculator with React</h1>
        <Display result={next || total} />
        <ButtonPanel clickHandler={buttonName => handleClick(buttonName)} />
      </div>
    </>
  );
};

export default App;
