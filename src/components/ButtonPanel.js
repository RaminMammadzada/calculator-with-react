import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      buttonGroups: [
        { buttons: ['AC', '+/-', '%', '/'] },
        { buttons: ['7', '8', '9', 'x'] },
        { buttons: ['4', '5', '6', '-'] },
        { buttons: ['1', '2', '3', '+'] },
        { buttons: ['0', '.', '='] },
      ],
    };
  }

  render() {
    let buttonsView = [];

    const { buttonGroups } = this.state;
    const { clickHandler } = this.props;

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
  }
}

ButtonPanel.defaultProps = {
  clickHandler: null,
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
