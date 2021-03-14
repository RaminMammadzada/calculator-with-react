import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, handleClick } = props;
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
};

Button.defaultProps = {
  handleClick: null,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
