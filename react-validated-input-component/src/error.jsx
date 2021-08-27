import React from 'react';

export default class Error extends React.Component {
  render() {
    const isValid = this.props.isValid;
    const value = this.props.value;
    let message = '';
    const tooShort = 'Your password is too short.';
    const passwordNeeded = 'A password is required.';
    if (value === '') {
      message = passwordNeeded;
    } else if (!isValid) {
      message = tooShort;
    }

    return (
      <p className="color-red">
        {message}
      </p>
    );
  }
}
