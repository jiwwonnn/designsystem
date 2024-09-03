import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import {ButtonStyle} from "./UnitStyle";

export const Button = ({ theme, variant, className, label, size, handleBtnOnClick = () => {} , ...props }) => {
  return (
    <ButtonStyle
      type="button"
      onClick={handleBtnOnClick}
      className={`button ${variant ? variant : ''} ${className ? className : ''} ${size ? size : ''}`}
      theme={theme}
      {...props}
    >
      {label}
    </ButtonStyle>
  );
};

Button.propTypes = {
  /**
   * border, 글자색
   */
  theme: PropTypes.string,
  /**
   * 선, 꽉차게, radius
   */
  variant: PropTypes.oneOf(['linear', 'fill', 'rounded']),
  /**
   * 사이즈
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * onClick
   */
  handleBtnOnClick: PropTypes.func,
  /**
   * 스토리북에서만 사용, 실제로는 label 사용을 안할거같음 글자를 children 으로 입력해서 받기..?
   */
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  theme: 'black',
  variant: 'linear',
  label : '버튼',
};
