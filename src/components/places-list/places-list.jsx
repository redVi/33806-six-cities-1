import React from 'react';
import PropTypes from 'prop-types';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

const PlacesList = ({places, current, setActiveItem}) =>
  <div className="cities__places-list places__list tabs__content">
    {places
      ? places.map((offer, index) =>
        <PlacesListItem
          key={`place-${index}`}
          offer={offer}
          current={current === index ? current : undefined}
          handleImageClick={() => setActiveItem(index)} />)
      : null
    }
  </div>;

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  current: PropTypes.number,
  setActiveItem: PropTypes.func
};

export default PlacesList;
