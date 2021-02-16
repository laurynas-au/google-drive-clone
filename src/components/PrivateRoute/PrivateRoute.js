import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


const PrivateRoute = ({ component: Component, ...rest }) => {

  const { currentUser } = useAuth();

  return (
    <Route 
    {...rest}
    render={(props) => {
      return currentUser ? <Component {...props } /> : <Redirect to="/login" />
    }}
    >
    </Route>
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any
  }

export default PrivateRoute;
