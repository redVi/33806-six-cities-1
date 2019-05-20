import React from 'react';
import PropTypes from 'prop-types';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

const PlacesList = (props) =>
  <div className="cities__places-list places__list tabs__content">
    {props.offers
      ? props.offers.map((offer, index) =>
        <PlacesListItem
          key={index}
          offer={offer}
          handleImageClick={() => props.handleImageClick(offer)} />)
      : null
    }
  </div>;

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  handleImageClick: PropTypes.func
};

export default PlacesList;
