import React from 'react';
import ReactDOM from 'react-dom';

class CustomStopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarted: false,
      time: 0
    };
    this.startOrPause = this.startOrPause.bind(this);
    this.reset = this.reset.bind(this);

  }

  startOrPause() {
    if (!this.state.isStarted) {
      this.setState({
        isStarted: true
      });
      this.intervalId = setInterval(() => {
        this.setState({
          time: this.state.time + 1
        });
      }, 1000);
    } else {
      this.setState({
        isStarted: false
      });
      clearInterval(this.intervalId);
    }

  }

  reset() {
    if (!this.state.isStarted) {
      this.setState({ time: 0 });
    }
  }

  render() {
    if (!this.state.isStarted) {
      return (
      <div className="display-flex flex-direction-col">
        <button className="watch-face" onClick={this.reset}>
          <h1>{this.state.time}</h1>
        </button>
        <button className="play-button" onClick={this.startOrPause}>
          <i className="fas fa-play"></i>
        </button>
      </div>
      );
    } else {
      return (
        <div className="display-flex flex-direction-col">
          <button className="watch-face" onClick={this.reset}>
            <h1>{this.state.time}</h1>
          </button>
          <button className="play-button" onClick={this.startOrPause}>
            <i className="fas fa-pause"></i>
          </button>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <CustomStopwatch />,
  document.querySelector('#root')
);
