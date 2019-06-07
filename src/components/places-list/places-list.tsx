import React from 'react';
import {offer} from '@/types';
import PlacesListItem from '@/components/places-list-item/places-list-item';

interface Props {
  places: offer[],
  current?: number,
  setActiveItem: (index: object) => void
}

const PlacesList = (props) => {
  const {places, current, setActiveItem}: Props = props;

  return (
    <div className="cities__places-list places__list tabs__content">
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
