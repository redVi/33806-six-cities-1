import React from 'react';
import {offerType} from '@/types';
import PlacesListItem from '@/components/places-list-item/places-list-item';

interface Props {
  places: offerType[],
  current?: number,
  setActiveItem?: (index: object) => void,
  className?: string
}

const PlacesList = (props) => {
  const {places, current, setActiveItem}: Props = props;
  const className = props.className || 'cities__places-list';

  return (
    <div className={`${className} places__list tabs__content`}>
      {places
        ? places.map((offer, index) =>
          <PlacesListItem
            key={`place-${offer.id}`}
            offer={offer}
            current={current === index ? current : undefined}
            handleImageClick={() => setActiveItem(offer)} />)
        : null
      }
    </div>
  );
};

export default PlacesList;
