import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { result } = this.props;
    return (
      <p>{result}</p>
    );
  }
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
