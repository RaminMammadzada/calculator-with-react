import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const initialState = {
    buttonGroups: [
      { buttons: ['AC', '+/-', '%', '/'] },
      { buttons: ['7', '8', '9', 'x'] },
      { buttons: ['4', '5', '6', '-'] },
      { buttons: ['1', '2', '3', '+'] },
      { buttons: ['0', '.', '='] },
    ],
  };

  const [state] = useState(initialState);

  let buttonsView = [];

  const { buttonGroups } = state;
  const { clickHandler } = props;

  buttonsView = (
    <div>
      {buttonGroups.map(group => (
        <div className="key-list" key={`${group.buttons.join('-')}`}>
          {group.buttons.map(button => (
            <Button
              key={`btn-${button}`}
              buttonName={button}
              handleClick={button => clickHandler(button)}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      {buttonsView}
    </div>
  );
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

export default ButtonPanel;
