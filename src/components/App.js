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

    this.handleClick = buttonName => {
      const { total, next, operation } = calculate(this.state, buttonName);
      this.setState({
        total,
        next,
        operation,
      });
    };
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <div className="calculator">
          <h1>Calculator with React</h1>
          <Display result={next || total} />
          <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
        </div>
      </>
    );
  }
}

export default App;
