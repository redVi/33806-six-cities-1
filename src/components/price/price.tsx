import React from 'react';

interface Props {
  price?: number,
  className?: string,
  text?: string
}

const Price = (props: Props) => {
  const className = props.className || `place-card__price`;

  return (
    <div className={className}>
      <b className={`${className}-value`}>&euro;{props.price}</b>
      <span className={`${className}-text`}>
        {props.text}
      </span>
    </div>
  )
};

export default Price;
