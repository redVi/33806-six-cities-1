import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {cities, current, handleSelectCity, setActiveItem} = props;

  const _handleClick = (event, idx, city) => {
    event.preventDefault();
    handleSelectCity(city);
    setActiveItem(idx);
  };

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, idx) =>
            <li className="locations__item" key={`${city}`}>
              <a
                className={`locations__item-link tabs__item ${idx === current ? `tabs__item--active` : ``}`}
                href="#"
                onClick={(e) => _handleClick(e, idx, city)}>
                <span>{city}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.number,
  handleSelectCity: PropTypes.func.isRequired,
  setActiveItem: PropTypes.func.isRequired
};

export default CitiesList;
