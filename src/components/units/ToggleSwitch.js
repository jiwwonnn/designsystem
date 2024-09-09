import {ToggleSwitchStyle} from "../../assets/styles/UnitStyle";

const ToggleSwitch = (props) => {

  const { isOn, handleActive} = props

  return (
    <ToggleSwitchStyle isOn={isOn} onClick={handleActive}>
      <div className="switch_thumb">&nbsp;</div>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;