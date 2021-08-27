import React from 'react';
import Error from './error.jsx';
import Icon from './icon.jsx';
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
    const input = event.target.value;
    const valid = input.length >= 8;
    this.setState({
      value: event.target.value,
      isValid: valid
    });
  }

  render() {
    return (
      <form>
        <label>
          <p>Password</p>
          <div className="flex">
            <input type="password" onChange={this.handleChange} value={this.state.value} />
            <Icon isValid={this.state.isValid} />
          </div>
        </label>
        <Error isValid={this.state.isValid} value={this.state.value} />
      </form>
    );
  }
}

ReactDOM.render(
  <PasswordInput />,
  document.querySelector('#root')
);
