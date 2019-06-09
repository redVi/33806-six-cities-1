import React from 'react';
import {Link} from 'react-router-dom';
import {offerType} from '@/types';
import Bookmark from '@/components/bookmark/bookmark';

const PlaceInfo = (props) => {
  const {id, title, type, price, rating, isFavorite}: offerType = props;
  const calculatedRating: string = `${rating ? rating * 2 * 10 : 0}%`;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>

        <Bookmark isFavorite={isFavorite} id={id} />

      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: calculatedRating}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>

      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>

      <p className="place-card__type">{type}</p>
    </div>
  );
};

export default PlaceInfo;
