import React from 'react';
import PropTypes from 'prop-types';

import PlaceMark from '@/components/place-mark/place-mark.jsx';
import PlaceImage from '@/components/place-image/place-image.jsx';
import PlaceInfo from '@/components/place-info/place-info.jsx';

const PlacesListItem = ({offer, current, handleImageClick}) => {
  const mark = offer.isPremium ? <PlaceMark/> : null;
  const activeClass = current >= 0 ? `cities__place-card--active` : ``;

  return (
    <article className={`cities__place-card ${activeClass} place-card`}>
      {mark}
      <PlaceImage previewImage={offer.previewImage} handleClick={() => handleImageClick()} />
      <PlaceInfo {...offer} />
    </article>
  );
};

PlacesListItem.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
    rating: PropTypes.number,
    previewImage: PropTypes.string
  }),
  handleImageClick: PropTypes.func,
  current: PropTypes.number
};

export default PlacesListItem;
