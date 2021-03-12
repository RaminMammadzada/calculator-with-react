import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { buttonName, handleClick } = this.props;
    let btnStyle = 'normal-button';
    if (['/', 'x', '-', '+', '=', '+/-', '%'].includes(buttonName)) {
      btnStyle = 'operation-button';
    }

    return (
      <button
        type="button"
        onClick={() => handleClick(buttonName)}
        className={btnStyle}
      >
        {buttonName}
      </button>
    );
  }
}

Button.defaultProps = {
  handleClick: null,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
