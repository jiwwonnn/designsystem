import {ButtonStyle} from "../../assets/styles/UnitStyle";

/*
theme: color값
variant: linear || fill, rounded
size : sm || md || lg | full
disabled
onClick
*/
const Button = (props) => {
  const { theme = 'black', variant, className, children, size, handleBtnOnClick = () => {} , ...others} = props
  return (
    <ButtonStyle
      className={`button ${variant ? variant : ''} ${className ? className : ''} ${size ? size: ''}`}
      theme={theme}
      onClick={() => handleBtnOnClick()}
      {...others}
    >
      {children}
    </ButtonStyle>
  )
}

export default Button