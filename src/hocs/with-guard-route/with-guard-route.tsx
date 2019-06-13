import React from 'react';
import {Redirect} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '@/reducer/user/selectors';

interface Props {
  isLoggedIn: boolean
}

const withGuardRoute = function (WrappedComponent, flag: boolean, path: string) {
  return function withProps(props: Props) {
    const {isLoggedIn} = props;

    switch (true) {
      case isLoggedIn === undefined: return null;
      case isLoggedIn === flag: return <Redirect to={path} />
      default: return <WrappedComponent {...props} />;
    }
  }
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const composedComponentWrapper = compose(
    connect(mapStateToProps),
    withGuardRoute
);

export {withGuardRoute};
export default composedComponentWrapper;
