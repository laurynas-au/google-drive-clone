import React from 'react';
import './Button.scss';

const Button = (props) => {
  return (
      <button disabled={props.disabled} type="button" className={`button${props.buttonStyle? ` button--${props.buttonStyle}` : ''}`} onClick={props.onClick}>
        {props.children}
      </button>
  )
}

export default Button
