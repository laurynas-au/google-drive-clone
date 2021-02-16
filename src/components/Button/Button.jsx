import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
  return (
      <button disabled={props.disabled} type="button" className={`button${props.buttonStyle? ` button--${props.buttonStyle}` : ''}`} onClick={props.onClick}>
        {props.children}
      </button>
  )
}

Button.propTypes = {
  buttonStyle: PropTypes.oneOf(['', 'full-width', 'text']),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
  }
  

export default Button
