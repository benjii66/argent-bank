import React from 'react'
const Button = (props) => {
    const {title = null, style = "blank", type ="", disabled=""} = props;

  return (
    <button className={style}>{title}</button>
  )
}
export default Button