import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlaceBookmark from '@/components/place-bookmark/place-bookmark.jsx';

const PlaceInfo = (props) => {
  const {id, title, type, price, rating, isFavorite, titleHandler} = props;
  const calculatedRating = `${rating ? rating * 2 * 10 : 0}%`;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <PlaceBookmark isFavorite={isFavorite} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: calculatedRating}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={titleHandler}>
        <Link to={`${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

PlaceInfo.propTypes = ({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string,
  rating: PropTypes.number,
  isFavorite: PropTypes.bool,
  titleHandler: PropTypes.func,
});

export default PlaceInfo;
