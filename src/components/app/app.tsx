import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import {dataActionCreator} from '@/reducer/data/data';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';
import {getUserData} from '@/reducer/user/selectors';
import Auth from '@/api/auth';
import Hotels from '@/api/hotels';

import SvgSprite from '@/components/svg-sprite/svg-sprite';
import MainHeader from '@/components/main-header/main-header';
import MainPage from '@/components/main-page/main-page';
import Login from '@/components/login/login';
import Favorites from '@/components/favorites/favorites';
import withGuardRoute from '@/hocs/with-guard-route/with-guard-route';
import {userActionCreator} from '@/reducer/user/user';

interface Props {
  user: object,
  city: object,
  cities: string[],
  offers: object[],
  logIn: (user: object) => object,
  logOut: () => object,
  changeCity: (city: string) => object,
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

const mapStateToProps = (state: object, ownProps: object | {}) => (
  Object.assign({}, ownProps, {
    user: getUserData(state),
    city: getCity(state),
    cities: getCities(state),
    offers: getSelectedOffers(state),
  })
);

const mapDispatchToProps = (dispatch: Function) => ({
  logIn: (form: object) => {
    dispatch(userActionCreator.logIn(form));
  },
  logOut: () => {
    dispatch(userActionCreator.logOut());
  },
  changeCity: (city: string) => {
    dispatch(dataActionCreator.changeCity(city));
  },
  fetchOffers: () => {
    Hotels.get().then((response) => {
      dispatch(dataActionCreator.fetchOffers(response.data));
    });
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
