import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {dataActionCreator} from '@/reducer/data/data';
import {userActionCreator} from '@/reducer/user/user';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';
import {checkAuthorization, getUserData} from '@/reducer/user/selectors';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';
import SignIn from '@/components/sign-in/sign-in.jsx';

const App = (props) => {
  const {
    user,
    city,
    cities,
    offers,
    isAuthorizationRequired,
    changeCity,
    signIn
  } = props;

  const Main = <MainPage cities={cities} offers={offers} city={city} changeCity={changeCity} />;
  const SignInPage = <SignIn />;
  const pageClassName = isAuthorizationRequired ? `login` : `main`;
  const CurrentPage = isAuthorizationRequired ? SignInPage : Main;

  return (
    <div className={`page page--gray page--${pageClassName}`}>
      <SvgSprite />
      <MainHeader
        isAuthorizationRequired={isAuthorizationRequired}
        handleSignInClick={() => signIn()}
        user={user} />
      {CurrentPage}
    </div>
  );
};

const _mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserData(state),
  city: getCity(state),
  cities: getCities(state),
  offers: getSelectedOffers(state),
  isAuthorizationRequired: checkAuthorization(state)
});

const _mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(dataActionCreator.changeCity(city));
  },
  signIn: () => {
    dispatch(userActionCreator.changeAuthorization(true));
  }
});

App.propTypes = {
  user: PropTypes.object,
  city: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  isAuthorizationRequired: PropTypes.bool.isRequired,
  changeCity: PropTypes.func,
  signIn: PropTypes.func
};

export {App};

export default connect(_mapStateToProps, _mapDispatchToProps)(App);
