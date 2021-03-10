import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { buttonName } = this.props;

    return (
      <p className="button">{buttonName}</p>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};
