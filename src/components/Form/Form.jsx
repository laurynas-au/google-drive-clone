import React from "react";
import PropTypes from "prop-types";
import "./Form.scss";

const Form = props => {
  return (
    <form className="form">
      {props.children}
    </form>
  )
}

const FormTitle = props => {
  return (
    <h2 className="form__title">{props.children}</h2>
  )
} 

const InputLabel = props => {
  return (
    <label htmlFor={props.for} className="form__input-label">
    {props.children}
  </label>
  )
} 

const Input = props => {
  return (
    <input
    id={props.id} 
    type={props.type} 
    value={props.value}
    onChange={props.onChange}
    className="form__input"
    required={props.required}
  ></input>
  )
} 



Form.propTypes = {
  children: PropTypes.node,
}

FormTitle.propTypes = {
  children: PropTypes.node,
}

InputLabel.propTypes = {
  for: PropTypes.string,
  children: PropTypes.node,
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}


export default Form;
export { FormTitle, InputLabel, Input };

