import React from 'react';
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
  logIn: (user: object) => object,
  logOut: () => object,
  fetchOffers: () => object[]
}

class App extends React.Component<Props> {
  componentDidMount() {
    Auth.get().then((response) => {
      this.props.logIn(response.data);
    }).catch(() => {
      this.props.logOut();
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
  logIn: (form: object) => {
    dispatch(userActionCreator.logIn(form));
  },
  logOut: () => {
    dispatch(userActionCreator.logOut());
  },
  fetchOffers: () => {
    Hotels.get().then((response) => {
      dispatch(dataActionCreator.fetchOffers(response.data));
    });
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
