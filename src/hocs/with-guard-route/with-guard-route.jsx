import React from 'react';
import {Redirect} from 'react-router-dom';

const withGuardRoute = (WrappedComponent, isLoggedIn, ...props) => {
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <WrappedComponent {...props} />;
};

export default withGuardRoute;
