import {InputStyle} from "../../assets/styles/UnitStyle";

/*
placeholder
error : 에러유무 / boolean
disabled
readOnly
*/
const Input = (props) => {
  const { placeholder, className, error , disabled, readOnly } = props
  return (

    <InputStyle className={`${className ? className : ''}`}>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
      />
      {error && <span className="error">잘못된 내용입니다.</span>}
    </InputStyle>
  )
}

export default Input