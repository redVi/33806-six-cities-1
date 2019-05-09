import React from 'react';
import PropTypes from 'prop-types';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

const PlacesList = ({offers}) =>
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer, index) => <PlacesListItem offer={offer} key={index} />)}
  </div>;

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default PlacesList;
