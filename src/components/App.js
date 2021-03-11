import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    // const input = event.target.value;

    const { total, next, operation } = this.state;
    console.log(calculate([total, next, operation], buttonName));

    this.setState(state => calculate(state, buttonName));
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <Display result={next || total} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </>
    );
  }
}

export default App;
