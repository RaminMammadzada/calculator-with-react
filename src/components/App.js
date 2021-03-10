import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const calculate = (a, b) => a + b;

const App = () => (
  <>
    <Display result={calculate(5, 3).toString()} />
    <ButtonPanel />
  </>
);

export default App;
