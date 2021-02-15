import React from 'react';
import './Alert.scss';

export default function Alert(props) {
  return (
  <div className={`alert${props.type? ` alert--${props.type}` : ''}`}>
    {props.children}
  </div>
  )
}
