import React from 'react';
import {connect} from 'react-redux';
import {dataActionCreator} from '@/reducer/data/data';
import {getCities, getCity, getSelectedOffers} from '@/reducer/data/selectors';

import {offer, city} from '@/types';
import CitiesList from '@/components/cities-list/cities-list';
import OffersEmpty from '@/components/offers-empty/offers-empty';
import Offers from '@/components/offers/offers';
import withSorting from '@/hocs/with-sorting/with-sorting';
import withActiveItem from '@/hocs/with-active-item/with-active-item';

interface Props {
  offers: offer[],
  cities: string[],
  city: city,
  changeCity: (city: string) => object,
}

const HomePage  = (props) => {
  const {offers, cities, city, changeCity}: Props = props;

  const hasOffers = offers && offers.length;
  const Places = withActiveItem(withSorting(Offers, offers));
  const content = hasOffers ? <Places city={city} /> : <OffersEmpty />;

  const mainClass = hasOffers
    ? 'page page--gray page--main'
    : 'page__main page__main--index page__main--index-empty';

  return (
    <div className="page page--gray page--main">
      <main className={mainClass}>
        <h1 className="visually-hidden">Cities</h1>

        <CitiesList
          cities={cities}
          current={city.name}
          handleSelectCity={changeCity} />

        <div className="cities__places-wrapper">
          {content}
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state: object) => ({
  city: getCity(state),
  cities: getCities(state),
  offers: getSelectedOffers(state),
});

const mapDispatchToProps = (dispatch: Function) => ({
  changeCity: (cityName: string) => {
    dispatch(dataActionCreator.changeCity(cityName));
  }
});

export {HomePage};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
