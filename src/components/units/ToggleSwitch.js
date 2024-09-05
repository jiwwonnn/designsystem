import {ToggleSwitchStyle} from "../../assets/styles/UnitStyle";

const ToggleSwitch = (props) => {

  const { isOn, handleActive} = props

  return (
    <ToggleSwitchStyle isOn={isOn} onClick={handleActive}>
      <div className="bbb">&nbsp;</div>
    </ToggleSwitchStyle>
  );
};

export default ToggleSwitch;