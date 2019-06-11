import React from 'react';

interface Props {
  className?: string
}

const Mark = (props: Props) => {
  return (
    <div className={props.className || 'place-card__mark'}>
      <span>Premium</span>
    </div>
  )
};

export default Mark;
