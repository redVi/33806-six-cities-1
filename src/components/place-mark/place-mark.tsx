import React from 'react';

const PlaceMark = (props) => {
  return (
    <div className={props.className || 'place-card__mark'}>
      <span>Premium</span>
    </div>
  )
};

export default PlaceMark;
