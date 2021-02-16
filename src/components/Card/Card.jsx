import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  return (
    <section className="card">
      {props.children}
    </section>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  }
  

export default Card;