import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actionCreator} from '@/reducer/data/data';

import SvgSprite from '@/components/svg-sprite/svg-sprite.jsx';
import MainHeader from '@/components/main-header/main-header.jsx';
import MainPage from '@/components/main-page/main-page.jsx';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';

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
  city: getCity(state),
  cities: getCities(state),
  offers: getSelectedOffers(state)
});

const _mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => {
    dispatch(actionCreator.changeCity(city));
  }
});

App.propTypes = {
  city: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  changeCity: PropTypes.func
};

export {App};

export default connect(_mapStateToProps, _mapDispatchToProps)(App);
