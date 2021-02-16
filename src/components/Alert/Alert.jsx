import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const Alert = (props) =>  {
  return (
  <div className={`alert${props.type? ` alert--${props.type}` : ''}`}>
    {props.children}
  </div>
  )
}

Alert.propTypes = {
children: PropTypes.node,
type: PropTypes.oneOf(['', 'danger', 'success']),
}

export default Alert;
