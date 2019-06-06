import React from 'react';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '@/reducer/user/selectors';

interface Props {
  isLoggedIn: boolean
}

const withGuardRoute = function (WrappedComponent, accessTo) {
  return function withProps(props: Props) {
    const {isLoggedIn} = props;

    switch (true) {
      case isLoggedIn === undefined: return null;
      case isLoggedIn === false && accessTo === 'user': return <Redirect to="/login" />;
      case isLoggedIn === true && accessTo === 'anonymous': return <Redirect to="/" />;
      default: return <WrappedComponent {...props} />;
    }
  }
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const composedComponentWrapper = compose(
    connect(mapStateToProps, null),
    withGuardRoute
);

export {withGuardRoute};
export default composedComponentWrapper;
