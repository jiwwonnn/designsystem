import React from 'react';
import PropTypes from 'prop-types';
import './radiobutton.css';
import {RadioButtonStyle} from "./UnitStyle";


export const RadioButton = ({ className, text, name, defaultChecked, disabled  }) => {
  return (
    <RadioButtonStyle
      className={`radio_custom ${className}`}>
      <input className='radio' type="radio" name={name} defaultChecked={defaultChecked} disabled={disabled}/>
      <span className='circle_mark'>&nbsp;</span>
      <span className='radio_label'>{text}</span>
    </RadioButtonStyle>
  );
};

RadioButton.propTypes = {
  /**
   * className= 'check' 일 경우
   */
  className: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.string,
  /**
   * 글자
   */
  text : PropTypes.string,
  /**
   * name 값 (필수)
   */
  name: PropTypes.string,
  /**
   * 기본 check 유무
   */
  defaultChecked: PropTypes.bool,
};
