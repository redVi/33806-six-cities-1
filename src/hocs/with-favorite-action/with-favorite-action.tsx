import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {checkAuthorization} from "@/reducer/user/selectors";
import Favorite from '@/api/favorites';
import {userActionCreator} from "@/reducer/user/user";

interface Props {
  isLoggedIn: boolean
}

const withFavoriteAction = function (WrappedComponent) {
  return function withProps(props: Props) {

  }
};

const mapStateToProps = (state: object) => ({
  isLoggedIn: checkAuthorization(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToFavorite: () => {
    Favorite.post(200, 1).then((response) => {
      console.log(response);
    })
  },
});

const composedComponentWrapper = compose(
  connect(mapStateToProps, null),
  withFavoriteAction
);

export {withFavoriteAction};
export default composedComponentWrapper;
