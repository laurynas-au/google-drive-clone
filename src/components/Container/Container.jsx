import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = (props) => {
  return (
    <div className={`container${props.type? ` container--${props.type}` : ''}`}>
      {props.children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['', 'full-page', 'centered-card', 'content']),
}

export default Container
