import React from 'react';

interface Props {
  width?: string,
  height?: string,
  className?: string,
  isFavorite?: boolean,
  handleClick?: () => void
}

const PlaceBookmark = (props: Props) => {
  const rootClass = props.className || 'place-card';
  const active = props.isFavorite ? `${rootClass}__bookmark-button--active` : ``;

  return (
    <button
      className={`${rootClass}__bookmark-button ${active} button`}
      type="button"
      onClick={props.handleClick}>
      <svg className={`${rootClass}__bookmark-icon`} width={props.width || `18`} height={props.height || `19`}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export default PlaceBookmark;
