import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      { clicks: this.state.clicks + 1 }
    );
  }

  render() {
    if (this.state.clicks < 3) {
      return (
      <button className="navy" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 6) {
      return (
        <button className="purple" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 9) {
      return (
        <button className="red" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 12) {
      return (
        <button className="orange color-black" onClick={this.handleClick}>Hot Button</button>
      );
    } else if (this.state.clicks < 15) {
      return (
        <button className="yellow color-black" onClick={this.handleClick}>Hot Button</button>
      );
    } else {
      return (
        <button className="white color-black" onClick={this.handleClick}>Hot Button</button>
      );
    }
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
