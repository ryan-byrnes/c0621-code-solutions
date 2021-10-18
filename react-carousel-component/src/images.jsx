import React from 'react';

export default class Image extends React.Component {
  render() {
    const { id, displayed, url } = this.props;
    const imageClass = id === displayed ? 'image' : 'image hidden';
    return (
      <img className={imageClass} id={id} src={url} />
    );
  }
}
