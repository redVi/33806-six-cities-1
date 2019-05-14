import React from 'react';
import PropTypes from 'prop-types';

const PlaceImage = ({img, handleClick}) => {
  const imageName = img || `room.jpg`;
  const handleLinkClick = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#" onClick={handleLinkClick}>
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
  handleClick: PropTypes.func
};

export default PlaceImage;
