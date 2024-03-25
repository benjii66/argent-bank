import React from 'react'
const Button = (props) => {
    const {title = null, style = "", type ="", disabledStyle=false, onClickStyle=() => {}} = props;

  return (
    <button className={style} disabled={disabledStyle} onClick={onClickStyle}>{title}</button>
  )
}
export default Button