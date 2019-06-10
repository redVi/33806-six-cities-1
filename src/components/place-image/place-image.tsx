import React from 'react';

interface Props {
  previewImage: string,
  handleClick: () => void
}

const PlaceImage = (props: Props) => {
  const {previewImage, handleClick}: Props = props;

  const handleLinkClick = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="" onClick={handleLinkClick}>
        <img
          className="place-card__image"
          src={previewImage}
          width="260"
          height="200"
          alt="Place image" />
      </a>
    </div>
  );
};

export default PlaceImage;
