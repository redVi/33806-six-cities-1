import React from 'react';

interface Props {
  images: string[],
  maxCount: number
}

const Gallery = (props: Props) => {
  const {images, maxCount} = props;

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, maxCount).map((image, index) => (
          <div className="property__image-wrapper" key={`image-${index}`}>
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Gallery;
