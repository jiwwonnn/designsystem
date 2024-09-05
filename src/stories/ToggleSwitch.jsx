import React from 'react';
import PropTypes from 'prop-types';
import {ToggleSwitchStyle} from "./UnitStyle";


export const ToggleSwitch = (props) => {

  const { isOn, handleActive} = props

  return (
    <ToggleSwitchStyle isOn={isOn} onClick={handleActive}>
      <div className="bbb">&nbsp;</div>
    </ToggleSwitchStyle>
  );
};


ToggleSwitch.propTypes = {
  /**
   * isOn
   */
  isOn: PropTypes.bool,
  /**
   * isOn
   */
  handleActive: PropTypes.func,

};
