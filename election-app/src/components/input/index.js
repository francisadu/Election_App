import React from 'react';

export const Input = (props) => {
  return (

    <div className="mb-3">
      <label for={props.id} className="form-label">{props.title}</label>
      <input type={props.type} className="form-control" id={props.id} aria-describedby="emailHelp" />
      {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
  )
}
export default Input;