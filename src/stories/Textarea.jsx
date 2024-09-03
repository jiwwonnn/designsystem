import React from 'react';
import PropTypes from 'prop-types';
import './textarea.css';
import {TextareaStyle} from "./UnitStyle";

export const Textarea = ({ count, className , disabled, readOnly , placeholder, error }) => {
  return (
    <TextareaStyle className={`${className ? className : ''}`} error={error}>
      <div className='textarea_wrap'>
        <textarea
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>

      {
        count && <span className='count'>1/{count}</span>
      }
      {
        error && <span className='error'>error text</span>
      }
    </TextareaStyle>
  );
};

Textarea.propTypes = {
  /**
   * 글자수 제한 0 이상
   */
  count: PropTypes.number,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * readOnly
   */
  readOnly: PropTypes.bool,
  /**
   * placeholder
   */
  placeholder: PropTypes.string.isRequired,
  /**
   * error
   */
  error: PropTypes.bool,
};

Textarea.defaultProps = {
  placeholder: '텍스트를 입력하세요.'
};