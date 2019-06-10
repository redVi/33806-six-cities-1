import React from 'react';
import PlacesList from '@/components/places-list/places-list';

interface Props {
  items: []
}

const FavoritesList = (props: Props) => {
  const {items} = props;

  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(items).map(([key, value]) => (
          <li className="favorites__locations-items" key={key}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="">
                  <span>{key}</span>
                </a>
              </div>
            </div>

            <PlacesList places={value} className="favorites__places"/>

          </li>
        ))}
      </ul>
    </>
  )
};

export default FavoritesList;
