import React from 'react';
import PropTypes from 'prop-types';


const CardMessage = ({ message }) => (
  <div className="message__text">
    {message}
  </div>);

CardMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export { CardMessage };
