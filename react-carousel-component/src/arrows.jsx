import React from 'react';

export default class Arrow extends React.Component {
  render() {
    const { side, clickedArrow } = this.props;
    const leftArrow = <i className="fa fa-chevron-left" />;
    const rightArrow = <i className="fa fa-chevron-right" />;

    const arrow = side === 'left' ? leftArrow : rightArrow;
    const className = `arrow-button ${side} flex-center`;
    return (
      <div className={className} onClick={clickedArrow}>
        {arrow}
      </div>
    );
  }
}
