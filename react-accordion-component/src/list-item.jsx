import React from 'react';

export default class ListItem extends React.Component {
  render() {
    const { content } = this.props;
    const { id, heading, body } = content;
    return (
      <li id={id}>
        <h1>{heading}</h1>
        <p>{body}</p>
      </li>
    );
  }
}
