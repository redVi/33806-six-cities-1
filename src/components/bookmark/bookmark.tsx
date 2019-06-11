import React from 'react';
import withFavoriteAction from '@/hocs/with-favorite-action/with-favorite-action';

interface Props {
  isFavorite: boolean,
  width?: string,
  height?: string,
  className?: string,
  onClick?: () => void
}

const Bookmark = (props: Props) => {
  const rootClass = props.className || 'place-card';
  const active = props.isFavorite ? `${rootClass}__bookmark-button--active` : ``;

  return (
    <button
      className={`${rootClass}__bookmark-button ${active} button`}
      type="button"
      onClick={props.onClick}>
      <svg className={`${rootClass}__bookmark-icon`} width={props.width || `18`} height={props.height || `19`}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

export {Bookmark};
export default withFavoriteAction(Bookmark);
