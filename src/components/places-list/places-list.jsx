import React from 'react';
import PropTypes from 'prop-types';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

const PlacesList = ({offers}) => {
  const handleImageClick = (card) => card;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, index) =>
        <PlacesListItem
          key={index}
          offer={offer}
          handleImageClick={handleImageClick}
        />
      )}
    </div>
  );
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default PlacesList;
