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

    console.log(buttonName);
    this.setState({
      total: '=',
    });
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <>
        <Display result={calculate([total, next, operation], '+').total} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </>
    );
  }
}

export default App;
