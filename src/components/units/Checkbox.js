import {CheckboxStyle} from "../../assets/styles/UnitStyle";

const Checkbox = (props) => {
  const { className, text, disabled, defaultChecked } = props
  return (
    <CheckboxStyle className={`checkbox_custom ${className} `}>
      <input className="checkbox" type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
      <span className="checkmark">&nbsp;</span>
      {text === null ? null : (
        <span className="checkbox_label">
          {text}
        </span>
      )}
    </CheckboxStyle>
  )
}

export default Checkbox