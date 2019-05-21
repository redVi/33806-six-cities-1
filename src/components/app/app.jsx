import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actionCreator} from '@/reducer';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';

const App = (props) => {
  const {city, cities, offers, changeCity} = props;

  return (
    <div className="page page--gray page--main">
      <SvgSprite />
      <MainHeader />
      <MainPage
        cities={cities}
        offers={offers}
        city={city}
        changeCity={changeCity} />
    </div>
  );
};

const _mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  cities: Array.from(new Set(state.offers.map((offer) => offer.city))).slice(0, 6),
  offers: state.offers.filter((item) => item.city === state.city)
});

const _mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(actionCreator.changeCity(city));
  }
});

App.propTypes = {
  city: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  changeCity: PropTypes.func
};

export {App};

export default connect(_mapStateToProps, _mapDispatchToProps)(App);
