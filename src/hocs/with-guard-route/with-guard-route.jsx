import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '@/reducer/user/selectors';

const withGuardRoute = function (WrappedComponent) {
  function withProps(props) {
    if (props.isAuthorizationRequired) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  }

  withProps.propTypes = {
    isAuthorizationRequired: PropTypes.bool.isRequired
  };

  return withProps;
};

const mapStateToProps = (state) => ({
  isAuthorizationRequired: checkAuthorization(state)
});

const composedComponentWrapper = compose(
    connect(mapStateToProps, null),
    withGuardRoute
);

export default composedComponentWrapper;
