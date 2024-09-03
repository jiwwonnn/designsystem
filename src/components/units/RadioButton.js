import {RadioButtonStyle} from "../../assets/styles/UnitStyle";

/*
check : check 아이콘 boolean
disabled
 */

const RadioButton = (props) => {
  const { className, text, name, defaultChecked, disabled } = props;
  return (
    <RadioButtonStyle
      className={`radio_custom ${className}`}>
      <input className='radio' type="radio" name={name} defaultChecked={defaultChecked} disabled={disabled}/>
      <span className='circle_mark'>&nbsp;</span>
      <span className='radio_label'>{text}</span>
    </RadioButtonStyle>
  )
}

export default RadioButton
