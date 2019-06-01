import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';

import {dataActionCreator} from '@/reducer/data/data';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';
import {checkAuthorization, getUserData} from '@/reducer/user/selectors';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';
import Login from '@/components/login/login.jsx';
import Favorites from '@/components/favorites/favorites.jsx';
import withGuardRoute from '@/hocs/with-guard-route/with-guard-route.jsx';

const App = (props) => {
  const {
    user,
    city,
    cities,
    offers,
    isAuthorizationRequired,
    changeCity
  } = props;

  const pageClassName = isAuthorizationRequired ? `login` : `main`;
  const Header = () => <MainHeader isAuthorizationRequired={isAuthorizationRequired} user={user} />;
  const Home = () => <MainPage cities={cities} offers={offers} city={city} changeCity={changeCity} header={<Header />}/>;

  return (
    <div className={`page page--gray page--${pageClassName}`}>
      <SvgSprite />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/favorites" render={() =>
          withGuardRoute(Favorites, isAuthorizationRequired)} />
        <Redirect to="/" />
      </Switch>
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
