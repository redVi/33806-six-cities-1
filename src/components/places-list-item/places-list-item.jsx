import React from 'react';
import PropTypes from 'prop-types';

import PlaceImage from '@/components/place-image/place-image.jsx';
import PlaceInfo from '@/components/place-info/place-info.jsx';

const PlacesListItem = ({place}) => {
  return (
    <article className="cities__place-card place-card">
      <PlaceImage img={place.img} />
      <PlaceInfo {...place} />
    </article>
  );
};

PlacesListItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    bookmark: PropTypes.bool,
    premium: PropTypes.bool,
    rating: PropTypes.string,
    img: PropTypes.string
  })
};

export default PlacesListItem;
