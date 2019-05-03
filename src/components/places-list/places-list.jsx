import React from 'react';
import PropTypes from 'prop-types';

import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

const PlacesList = ({places}) =>
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, index) => <PlacesListItem place={place} key={index} />)}
  </div>;

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default PlacesList;
