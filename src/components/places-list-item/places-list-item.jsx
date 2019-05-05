import React from 'react';
import PropTypes from 'prop-types';

import PlaceMark from '@/components/place-mark/place-mark.jsx';
import PlaceImage from '@/components/place-image/place-image.jsx';
import PlaceInfo from '@/components/place-info/place-info.jsx';

const PlacesListItem = ({place}) => {
  const mark = place.premium ? <PlaceMark/> : null;

  return (
    <article className="cities__place-card place-card">
      {mark}
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
