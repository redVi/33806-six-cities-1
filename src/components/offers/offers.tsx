import React from 'react';
import {location} from '@/types';
import {filterOptions} from '@/constants';

import PlacesList from '@/components/places-list/places-list';
import CityMap from '@/components/city-map/city-map';
import PlacesForm from '@/components/places-form/places-form';

const Offers = (props) => {
  const {items, city, handleChangeOffersFilter, setActiveItem, activeItem} = props;
  const placesHeading: string = `${items.length} ${items.length > 1 ? `places` : `place`} to stay in ${city.name}`;
  const coordinates: location[] = items.map((offer) => offer.location);
  const hasActiveItem = activeItem && activeItem.location;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesHeading}</b>

        <PlacesForm
          filterOptions={filterOptions}
          handleChangeOffersFilter={handleChangeOffersFilter} />

        <PlacesList
          key={`${city.name}-wrapped-list`}
          places={items}
          setActiveItem={setActiveItem} />
      </section>

      <div className="cities__right-section">
        <CityMap
          coordinates={coordinates}
          hasSelectedItem={hasActiveItem}
          canZoomChange={true}
          location={hasActiveItem ? activeItem.location : city.location}
          key={`map-${city.name}`} />
      </div>
    </div>
  );
};

export default Offers;
