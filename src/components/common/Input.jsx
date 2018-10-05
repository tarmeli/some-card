import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  type, name, className, handleChange,
}) => (
  <React.Fragment>
    <input
      className={className}
      type={type}
      name={name}
      onChange={e => handleChange(e)}
    />
  </React.Fragment>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export { Input };
