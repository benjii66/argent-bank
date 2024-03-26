import React from 'react'

//because I'm using a lot of button in my app, I created a button component to avoid repeating the same code

//even if the html one seems to be more optimized

const Button = (props) => {
    const {title = null, style = "", type ="", disabledStyle=false, onClickStyle=() => {}} = props;

  return (
    <button className={style} disabled={disabledStyle} onClick={onClickStyle}>{title}</button>
  )
}
export default Button