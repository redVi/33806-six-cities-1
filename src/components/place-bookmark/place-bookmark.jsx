import React from 'react';
import PropTypes from 'prop-types';

const PlaceBookmark = (props) => {
  const active = props.isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <button className={`place-card__bookmark-button ${active} button`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

PlaceBookmark.propTypes = {
  isFavorite: PropTypes.bool,
};

export default PlaceBookmark;
