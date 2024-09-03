import {TextareaStyle} from "../../assets/styles/UnitStyle";

/*
count : ex ) 0/100 , 0/200 / boolean
disabled
readOnly
placeholder
error
*/
const Textarea = (props) => {
  const { count, className , disabled, readOnly , placeholder, error } = props

  return (
    <TextareaStyle className={`${className ? className : ''}`}>
      <div className='textarea_border'>
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
        error && <span className='error'>필수 정보를 입력하세요.</span>
      }
    </TextareaStyle>
  )
}

export default Textarea