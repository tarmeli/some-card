import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ sender, avatar, timestamp }) => (
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
  </div>);

CardHeader.propTypes = {
  sender: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

export { CardHeader };
