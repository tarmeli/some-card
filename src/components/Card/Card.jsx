import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../common';
import { buttonData } from '../../data';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonData,
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
      sender, message, avatar, timestamp,
    } = this.props;
    const { handleClick } = this;
    const { liked } = this.state;

    return (
      <div className="message">
        <div className="message__container">
          <div className="message__body">
            <div className="message__header">
              <strong>{sender}</strong>
              <img
                className="message__avatar"
                src={`./${avatar}`}
                alt={sender}
              />
              <br />
              <small
                className="message__date"
              >
                {timestamp.toString()}
              </small>
            </div>
            <div className="message__text">
              {message}
            </div>
          </div>
          <div className="message__button-group">
            {this.state.buttonData.map(item =>
          (<Button
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
  message: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};


export { Card };
