import React from 'react';

export default class Icon extends React.Component {
  render() {
    const isValid = this.props.isValid;
    const invalid = <i className="padding-left color-red fas fa-times"></i>;
    const valid = <i className="padding-left color-green fas fa-check"></i>;
    const icon = isValid ? valid : invalid;
    return (
      <span>
        {icon}
      </span >
    );
  }
}
