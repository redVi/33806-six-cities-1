import React from 'react';
import {offer} from '@/types';
import PlaceMark from '@/components/place-mark/place-mark';
import PlaceImage from '@/components/place-image/place-image';
import PlaceInfo from '@/components/place-info/place-info';

interface Props {
  offer: offer,
  handleImageClick: () => void,
  current?: number
}

const PlacesListItem = (props) => {
  const {offer, current, handleImageClick}: Props = props;
  const mark = offer.isPremium ? <PlaceMark/> : null;
  const activeClass = current >= 0 ? `cities__place-card--active` : ``;

  return (
    <article className={`cities__place-card ${activeClass} place-card`}>
      {mark}
      <PlaceImage previewImage={offer.previewImage} handleClick={() => handleImageClick()} />
      <PlaceInfo {...offer} />
    </article>
  );
};

export default PlacesListItem;
