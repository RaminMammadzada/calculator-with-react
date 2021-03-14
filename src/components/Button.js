import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { buttonName, handleClick, styling } = props;
  return (
    <button
      type="button"
      onClick={() => handleClick(buttonName)}
      className={styling}
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
  styling: PropTypes.string.isRequired,
};

export default Button;
