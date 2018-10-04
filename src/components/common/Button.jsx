import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  label, icon, liked, handleClick,
}) => (
  <React.Fragment>
    <a
      href="./"
      onClick={e => handleClick(e, label)}
      className={liked && label === 'like' ? 'button button__liked' : 'button'}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  </React.Fragment>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
