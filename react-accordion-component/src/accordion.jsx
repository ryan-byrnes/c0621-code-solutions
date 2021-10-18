import React from 'react';
import ListItem from './list-item';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayId: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const listItem = event.target.closest('li');
    let id = parseInt(listItem.id);
    if (id === this.state.displayId) {
      id = 0;
    }
    this.setState({
      displayId: id
    });
  }

  render() {
    const { list } = this.props;
    const elements = list.map(item => {
      return (
      <ListItem key={item.id} displayId={this.state.displayId} content={item} select={this.handleClick} />
      );
    });
    return (
      <ul className="list-style">
        {elements}
      </ul>
    );
  }
}
