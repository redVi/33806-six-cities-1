import React from 'react';
import PropTypes from 'prop-types';

import CitiesList from '@/components/cities-list/cities-list.jsx';
import PlacesList from '@/components/places-list/places-list.jsx';
import CityMap from '@/components/city-map/city-map.jsx';
import withActiveItem from '@/hocs/with-active-item/with-active-item.jsx';

const WrappedPlacesList = withActiveItem(PlacesList);

const MainPage = (props) => {
  const {offers, cities, city, changeCity} = props;
  const placesHeading = `${offers.length} ${offers.length > 1 ? `places` : `place`} to stay in ${city.name}`;
  const coordinates = offers.map((offer) => offer.location);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>

      <CitiesList
        cities={cities}
        current={city.name}
        handleSelectCity={changeCity} />

      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{placesHeading}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"/>
                </svg>
              </span>

              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>

              {/*
                  <select class="places__sorting-type" id="places-sorting">
                    <option class="places__option" value="popular" selected="">Popular</option>
                    <option class="places__option" value="to-high">Price: low to high</option>
                    <option class="places__option" value="to-low">Price: high to low</option>
                    <option class="places__option" value="top-rated">Top rated first</option>
                  </select>
                */}

            </form>

            <WrappedPlacesList key={`${city}-wrapped-list`} places={offers} />
          </section>
          <div className="cities__right-section">
            <CityMap
              coordinates={coordinates}
              location={city.location}
              key={`map-${city.name}`} />
          </div>
        </div>
      </div>
    </main>
  );
};

MainPage.propTypes = {
  city: PropTypes.object,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
  changeCity: PropTypes.func
};

export default MainPage;
