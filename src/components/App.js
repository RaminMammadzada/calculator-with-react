import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => (
  <>
    <Display result={calculate([0, 0, '+'], '+').total} />
    <ButtonPanel />
  </>
);

export default App;
