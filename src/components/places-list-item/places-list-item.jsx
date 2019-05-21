import React from 'react';
import PropTypes from 'prop-types';

import PlaceMark from '@/components/place-mark/place-mark.jsx';
import PlaceImage from '@/components/place-image/place-image.jsx';
import PlaceInfo from '@/components/place-info/place-info.jsx';

const PlacesListItem = ({offer, handleImageClick}) => {
  const mark = offer.premium ? <PlaceMark/> : null;

  return (
    <article className="cities__place-card place-card">
      {mark}
      <PlaceImage img={offer.img} handleClick={() => handleImageClick(offer)} />
      <PlaceInfo {...offer} />
    </article>
  );
};

PlacesListItem.propTypes = {
  offer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    bookmark: PropTypes.bool,
    premium: PropTypes.bool,
    rating: PropTypes.string,
    img: PropTypes.string
  }),
  handleImageClick: PropTypes.func
};

export default PlacesListItem;