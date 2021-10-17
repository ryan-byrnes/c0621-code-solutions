import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const { content, displayId, select } = this.props;
    const { id, heading, body } = content;
    const hidden = displayId !== id ? ' hidden' : '';
    return (
      <li id={id}>
        <h1 className="heading" onClick={select}>{heading}</h1>
        <p className={'content' + hidden}>{body}</p>
      </li>
    );
  }
}
