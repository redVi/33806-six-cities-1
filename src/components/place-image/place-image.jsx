import React from 'react';
import PropTypes from 'prop-types';

const PlaceImage = (props) => {
  const imageName = props.img || `room.jpg`;

  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={`img/${imageName}`}
          width="260"
          height="200"
          alt="Place image" />
      </a>
    </div>
  );
};

PlaceImage.propTypes = {
  img: PropTypes.string,
};

export default PlaceImage;
