import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from '@/reducer/user/selectors';

interface Props {
  isLoggedIn: boolean
}

const withAuth = function (WrappedComponent) {
  return function withProps(props: Props) {
    return <WrappedComponent {...props} />
  }
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const composedComponentWrapper = compose(
  connect(mapStateToProps, null),
  withAuth
);

export {withAuth};
export default composedComponentWrapper;
