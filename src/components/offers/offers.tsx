import React from 'react';
import PlacesList from '@/components/places-list/places-list';
import CityMap from '@/components/city-map/city-map';
import withActiveItem from '@/hocs/with-active-item/with-active-item';
import {location} from "@/types";
const WrappedPlacesList = withActiveItem(PlacesList);

const Offers = (props) => {
  const {offers, city} = props;
  const placesHeading: string = `${offers.length} ${offers.length > 1 ? `places` : `place`} to stay in ${city.name}`;
  const coordinates: location[] = offers.map((offer) => offer.location);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesHeading}</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type">
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>

          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={1}>Price: low to high</li>
            <li className="places__option" tabIndex={2}>Price: high to low</li>
            <li className="places__option" tabIndex={3}>Top rated first</li>
          </ul>
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
  );
};

export default Offers;
