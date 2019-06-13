import React from 'react';
import {OfferType} from '@/types';
import PlacesListItem from '@/components/places-list-item/places-list-item';

interface Props {
  places: OfferType[],
  current?: number,
  onImageClick?: (item: object) => any,
  className?: string
}

const PlacesList = (props: Props) => {
  const {places, current, onImageClick}: Props = props;
  const className = props.className || 'cities__places-list';

  return (
    <div className={`${className} places__list tabs__content`}>
      {places
        ? places.map((offer, index) =>
          <PlacesListItem
            key={`place-${offer.id}`}
            offer={offer}
            current={current === index ? current : undefined}
            onImageClick={() => onImageClick ? onImageClick(offer): undefined} />)
        : null
      }
    </div>
  );
};

export default PlacesList;
