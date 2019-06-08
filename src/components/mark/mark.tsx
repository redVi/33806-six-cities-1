import React from 'react';

const Mark = (props) => {
  return (
    <div className={props.className || 'place-card__mark'}>
      <span>Premium</span>
    </div>
  )
};

export default Mark;
