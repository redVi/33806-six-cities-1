import React from 'react';
import {OfferType} from '@/types';
import PlacesList from '@/components/places-list/places-list';

interface Props {
  items: {
    [key: string]: OfferType[]
  }
}

const FavoritesList = (props: Props) => (
  <>
    <h1 className="favorites__title">Saved listing</h1>
    <ul className="favorites__list">
      {Object.entries(props.items).map(([key, value]) => (
        <li className="favorites__locations-items" key={key}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="">
                <span>{key}</span>
              </a>
            </div>
          </div>
          <PlacesList places={value} className="favorites__places" />
        </li>
      ))}
    </ul>
  </>
);

export default FavoritesList;
