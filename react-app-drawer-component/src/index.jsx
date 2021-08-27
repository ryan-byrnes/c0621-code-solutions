import React from 'react';
import ReactDOM from 'react-dom';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleOpen() {
    this.setState({ isOpen: true });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  render() {
    if (!this.state.isOpen) {
      return (
      <i className="fas fa-bars" onClick={this.handleOpen}></i>
      );
    } else {
      return (
        <div className="background" onClick={this.handleClose}>
          <div className="menu-container" onClick={this.handleClose}>
            <div>
              <h1>Menu Items</h1>
            </div>
            <div>
              <ul>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Drawer />,
  document.querySelector('#root')
);
