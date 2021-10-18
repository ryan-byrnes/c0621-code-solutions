import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Thanks' : 'Click Me!'}
      </button>

    );
  }
}

ReactDOM.render(
<CustomButton />,
document.querySelector('#root')
);
