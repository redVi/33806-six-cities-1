import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Auth from '@/api/auth';
import Hotels from '@/api/hotels';
import {getUserData} from '@/reducer/user/selectors';
import {userActionCreator} from '@/reducer/user/user';
import {dataActionCreator} from '@/reducer/data/data';
import SvgSprite from '@/components/svg-sprite/svg-sprite';
import Header from '@/components/header/header';

interface Props {
  user: object
  onLogIn: (user: object) => object,
  onLogOut: () => object,
  fetchOffers: () => object[]
}

class App extends PureComponent<Props> {
  componentDidMount() {
    Auth.get().then((response) => {
      this.props.onLogIn(response.data);
    }).catch((err) => {
      if (err.status === 403 || err.status === 401) {
        this.props.onLogOut();
      }
    });

    this.props.fetchOffers();
  }

  render() {
    return (
      <>
        <SvgSprite />
        <Header user={this.props.user} />
      </>
    );
  }
}

const mapStateToProps = (state: object, ownProps: object | {}) => (
  Object.assign({}, ownProps, {
    user: getUserData(state)
  })
);

const mapDispatchToProps = (dispatch: Function) => ({
  onLogIn: (form: object) => {
    dispatch(userActionCreator.logIn(form));
  },
  onLogOut: () => {
    dispatch(userActionCreator.logOut());
  },
  fetchOffers: () => {
    Hotels.get().then((response) => {
      dispatch(dataActionCreator.fetchOffers(response.data));
    }).catch(() => {
      dispatch(userActionCreator.logOut())
    })
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
