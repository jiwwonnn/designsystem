import React from 'react';
import PropTypes, {number} from 'prop-types';
import './input.css';
import {InputStyle} from "./UnitStyle";


export const Input = ({ placeholder, className, error , disabled, readOnly }) => {
  return (
    <InputStyle className={`${className ? className : ''}`} error={error}>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
      {error && <span className="error">error</span>}
    </InputStyle>
  );
};

Input.propTypes = {
  /**
   * disabled
   */
  disabled: PropTypes.string,
  /**
   * readOnly
   */
  readOnly: PropTypes.string,
  /**
   * placeholder
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * error
   */
  error: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: 'placeholder'
};