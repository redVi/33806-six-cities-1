import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {dataActionCreator} from '@/reducer/data/data';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';
import {getUserData} from '@/reducer/user/selectors';
import Auth from '@/api/auth';
import Hotels from '@/api/hotels';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';
import Login from '@/components/login/login.jsx';
import Favorites from '@/components/favorites/favorites.jsx';
import withGuardRoute from '@/hocs/with-guard-route/with-guard-route.jsx';
import {userActionCreator} from '@/reducer/user/user';

class App extends React.Component {
  componentDidMount() {
    Auth.get().then((response) => {
      this.props.logIn(response.data);
    }).catch(() => {
      this.props.logOut();
    });

    this.props.fetchOffers();
  }

  render() {
    const {
      user,
      city,
      cities,
      offers,
      changeCity
    } = this.props;

    const HomePage = () =>
      <MainPage
        cities={cities}
        offers={offers}
        city={city}
        changeCity={changeCity} />;

    return (
      <div className="page page--gray page--main">
        <SvgSprite />
        <MainHeader user={user} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/favorites" component={withGuardRoute(Favorites)} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUserData(state),
  city: getCity(state),
  cities: getCities(state),
  offers: getSelectedOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => {
    dispatch(userActionCreator.logIn(user));
  },
  logOut: () => {
    dispatch(userActionCreator.logOut());
  },
  changeCity: (city) => {
    dispatch(dataActionCreator.changeCity(city));
  },
  fetchOffers: () => {
    Hotels.get().then((response) => {
      dispatch(dataActionCreator.fetchOffers(response.data));
    });
  }
});

App.propTypes = {
  user: PropTypes.object,
  city: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  logIn: PropTypes.func,
  logOut: PropTypes.func,
  changeCity: PropTypes.func,
  fetchOffers: PropTypes.func
};

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
