import React from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function calculate(a, b) {
  return a + b;
}

function App() {
  return (
    <>
      <Display result={calculate(5, 3)} />
      <ButtonPanel />
    </>
  );
}

export default App;
