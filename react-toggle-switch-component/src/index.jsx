import React from 'react';
import ReactDOM from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.isOn
      ? this.setState({ isOn: false })
      : this.setState({ isOn: true });
  }

  render() {
    if (!this.state.isOn) {
      return (
        <div className="display-flex align-items">
      <div className="outer-div background-color-gray" onClick={this.handleClick}>
        <button className="inner-button"></button>
      </div>
      <h1 className="margin-left">Off</h1>
      </div>
      );
    } else {
      return (
        <div className="display-flex align-items">
        <div className="outer-div background-color-green align-right" onClick={this.handleClick}>
          <button className="inner-button"></button>
        </div>
        <h1 className="margin-left">On</h1>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);
