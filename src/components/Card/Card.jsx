import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common';
import { CardHeader, CardMessage } from './';
import { cardButtonData } from '../../data';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonData: cardButtonData,
      liked: false,
    };
  }

  handleClick = (e, label) => {
    e.preventDefault();
    this.setState({
      liked: label === 'like' ? !this.state.liked : this.state.liked,
    });
  }

  render() {
    const {
      sender, avatar, timestamp, message,
    } = this.props;
    const { handleClick } = this;
    const { liked } = this.state;

    return (
      <div className="message">
        <div className="message__container">
          <div className="message__body">
            <CardHeader
              sender={sender}
              avatar={avatar}
              timestamp={timestamp}
            />
            <CardMessage message={message} />
          </div>
          <div className="message__button-group">
            {this.state.buttonData.map(item =>
          (<Button
            className={liked && item.label === 'like' ? 'button button__liked' : 'button'}
            label={item.label}
            icon={item.icon}
            key={item.label}
            liked={liked}
            handleClick={handleClick}
          />))}
          </div>
        </div>
      </div>);
  }
}

Card.propTypes = {
  sender: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};


export { Card };
