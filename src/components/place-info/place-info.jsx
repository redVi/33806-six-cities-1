import React from 'react';
import PropTypes from 'prop-types';
import PlaceBookmark from '@/components/place-bookmark/place-bookmark.jsx';

const PlaceInfo = (props) => {
  const {name, type, price, rating, bookmark, titleHandler} = props;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <PlaceBookmark bookmark={bookmark} />
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: rating}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name" onClick={titleHandler}>
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

PlaceInfo.propTypes = ({
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string,
  rating: PropTypes.string,
  bookmark: PropTypes.bool,
  titleHandler: PropTypes.func,
});

export default PlaceInfo;
