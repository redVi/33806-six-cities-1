import React from 'react';
import PropTypes from 'prop-types';

import CitiesList from '@/components/cities-list/cities-list.jsx';
import PlacesList from '@/components/places-list/places-list.jsx';
import CityMap from '@/components/city-map/city-map.jsx';

const MainPage = ({offers}) =>
  <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <CitiesList />
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
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
          <PlacesList offers={offers} />
        </section>
        <div className="cities__right-section">
          <CityMap offers={offers} />
        </div>
      </div>
    </div>
  </main>
;

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default MainPage;
