import React from 'react';
import ReactDOM from 'react-dom';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    if (this.state.value.length < 8 && this.state.value.length > 0) {
      return (
        <form>
          <label>
            <p>Password</p>
            <div className="flex">
              <input type="password" onChange={this.handleChange}></input>
              <i className="padding-left color-red fas fa-times"></i>
            </div>
          </label>
          <p className="color-red">Your password is too short.</p>
        </form>
      );
    } else if (this.state.value.length === 0) {
      return (
        <form>
          <label>
            <p>Password</p>
            <div className="flex">
              <input type="password" onChange={this.handleChange}></input>
              <i className="padding-left color-red fas fa-times"></i>
            </div>
          </label>
          <p className="color-red">A password is required.</p>
        </form>
      );
    } else {
      return (
        <form>
          <label>
            <p>Password</p>
            <div className="flex">
              <input type="password" onChange={this.handleChange}></input>
              <i className="padding-left color-green fas fa-check"></i>
            </div>
          </label>
        </form>
      );
    }
  }
}

ReactDOM.render(
  <PasswordInput />,
  document.querySelector('#root')
);
