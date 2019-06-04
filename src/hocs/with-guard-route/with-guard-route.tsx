import React from 'react';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '@/reducer/user/selectors';

interface Props {
  isAuthorizationRequired: boolean
}

const withGuardRoute = function (WrappedComponent) {
  return function withProps(props: Props) {
    if (props.isAuthorizationRequired) {
      return <Redirect to="/login" />;
    }

    return <WrappedComponent {...props} />;
  }
};

const mapStateToProps = (state: object) => ({
  isAuthorizationRequired: checkAuthorization(state)
});

const composedComponentWrapper = compose(
    connect(mapStateToProps, null),
    withGuardRoute
);

export {withGuardRoute};
export default composedComponentWrapper;
