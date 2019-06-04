import React from 'react';

interface Props {
  isFavorite?: boolean,
}

const PlaceBookmark = (props: Props) => {
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

export default PlaceBookmark;
