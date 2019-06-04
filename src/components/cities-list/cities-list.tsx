import React from 'react';

interface Props {
  cities: string[],
  current: string,
  handleSelectCity: (city: string) => void
}

const CitiesList = (props) => {
  const {cities, current, handleSelectCity}: Props = props;

  const _handleClick = (event, city: string) => {
    event.preventDefault();
    handleSelectCity(city);
  };

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <li className="locations__item" key={`${city}`}>
              <a
                className={`locations__item-link tabs__item ${city === current ? `tabs__item--active` : ``}`}
                href="#"
                onClick={(e) => _handleClick(e, city)}>
                <span>{city}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
