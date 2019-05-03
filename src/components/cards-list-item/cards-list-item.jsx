import React from 'react';
import PropTypes from 'prop-types';

const CardsListItem = (props) => {
  const {place} = props;

  const CardMark = () =>
    <div className="place-card__mark">
      <span>Premium</span>
    </div>;

  const PlaceImage = () =>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image"
          src={`img/${place.img || `room.jpg`}`}
          width="260"
          height="200"
          alt="Place image" />
      </a>
    </div>;

  const PlaceBookmark = () => {
    const active = place.bookmark ? `place-card__bookmark-button--active` : ``;

    return (
      <button className={`place-card__bookmark-button ${active} button`} type="button">
        <svg className="place-card__bookmark-icon" width="18" height="19">
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    );
  };

  const mark = place.premium ? <CardMark /> : null;

  return (
    <article className="cities__place-card place-card">
      {mark}
      <PlaceImage />
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{place.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <PlaceBookmark />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: place.rating}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{place.name}</a>
        </h2>
        <p className="place-card__type">{place.type}</p>
      </div>
    </article>
  );
};

CardsListItem.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string,
    bookmark: PropTypes.bool,
    premium: PropTypes.bool,
    rating: PropTypes.string,
    img: PropTypes.string
  })
};

export default CardsListItem;
