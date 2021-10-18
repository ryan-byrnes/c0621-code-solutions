import React from 'react';
import Arrow from './arrows';
import Image from './images';
import Dot from './dots';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.toLeft = this.toLeft.bind(this);
    this.toRight = this.toRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    this.state = {
      displayed: 0,
      timeoutId: null
    };
  }

  componentDidMount() {
    const timeoutId = setTimeout(this.toRight, 3000);
    this.setState({ timeoutId });
  }

  toLeft(event) {
    const last = this.props.images.length - 1;
    const { displayed } = this.state;
    const next = displayed === 0 ? last : displayed - 1;
    const timeoutId = this.resetTimeout();
    this.setState({ displayed: next, timeoutId });
  }

  toRight(event) {
    const last = this.props.images.length - 1;
    const { displayed } = this.state;
    const next = displayed === last ? 0 : displayed + 1;
    const timeoutId = this.resetTimeout();
    this.setState({ displayed: next, timeoutId });
  }

  handleClick(event) {
    const id = parseInt(event.target.id, 10);
    const timeoutId = this.resetTimeout();
    this.setState({ displayed: id, timeoutId });
  }

  resetTimeout() {
    clearInterval(this.state.timeoutId);
    return setTimeout(this.toRight, 3000);
  }

  render() {
    return (
      <div className="carousel flex-center">
        <Arrow side="left" clickedArrow={this.toLeft} />
        {this.props.images.map((image, index) =>
        <Image key={image.id} id={index} displayed={this.state.displayed} url={image.url}/>
        )}
        <Arrow side="right" clickedArrow={this.toRight} />
        <div className="dots">
          {this.props.images.map((image, index) =>
            <Dot key={image.id} id={index} displayed={this.state.displayed} handleClick={this.handleClick} />
          )}
        </div>
      </div>
    );
  }
}
