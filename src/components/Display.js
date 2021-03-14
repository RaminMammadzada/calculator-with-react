import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { result } = props;

  if (result === null) {
    result = 0;
  }

  return (
    <div className="display">
      <p>{result}</p>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
