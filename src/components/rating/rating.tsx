import React, { ReactNode } from "react";

interface Props {
  rating: number;
  className: string;
  children?: ReactNode;
}

const Rating = (props: Props) => {
  const { rating, className, children } = props;
  const calculatedRating = `${rating ? rating * 2 * 10 : 0}%`;

  return (
    <div className={`${className}__rating rating`}>
      <div className={`${className}__stars rating__stars`}>
        <span style={{ width: calculatedRating }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};

export default Rating;
