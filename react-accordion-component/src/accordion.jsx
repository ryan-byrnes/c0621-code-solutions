import React from 'react';
import ListItem from './list-item';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOpen: true
    });
  }

  render() {
    const { list } = this.props;
    const elements = list.map(item => {
      return (
      <ListItem key={item.id} content={item} onClick={this.handleClick} />
      );
    });
    return (
      <ul>
        {elements}
      </ul>
    );
  }
}
