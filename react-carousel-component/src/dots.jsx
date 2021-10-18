import React from 'react';

export default class Dot extends React.Component {
  render() {
    const { id, displayed, handleClick } = this.props;
    const selected = <i className="fa fa-circle dot" id={id} onClick={handleClick} />;
    const notSelected = <i className="far fa-circle dot" id={id} onClick={handleClick} />;
    const circle = id === displayed ? selected : notSelected;
    return circle;
  }
}
