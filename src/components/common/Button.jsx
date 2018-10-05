import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({
  label, icon, handleClick, className, disabled,
}) => (
  <React.Fragment>
    <button
      disabled={disabled}
      onClick={e => handleClick(e, label)}
      className={className}
      value={label}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  </React.Fragment>
);

Button.defaultProps = {
  className: 'button',
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export { Button };
