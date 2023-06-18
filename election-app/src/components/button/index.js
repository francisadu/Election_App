import React from 'react'

export const Button = (props) => {
  return (
    <button title={props.title} type={props.type} class="btn btn-primary" onClick={props.onClick}>{props.title}</button>
  )
}
export default Button;