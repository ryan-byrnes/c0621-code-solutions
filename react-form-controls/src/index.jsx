import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState(
      {
        value: event.target.value
      }
    );
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
    <label>
      Email
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <button>Sign Up</button>
    </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
