import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = (props) => {
  return (
    <div className="card__footer">
      {props.children}
    </div>
  )
}

CardFooter.propTypes = {
  children: PropTypes.node,
  }
  
  export default CardFooter;