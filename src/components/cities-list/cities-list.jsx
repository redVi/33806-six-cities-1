import React from 'react';
import PropTypes from 'prop-types';

const CitiesList = (props) => {
  const {cities, current, handleSelectCity} = props;

  const _handleClick = (event, city) => {
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

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.string,
  handleSelectCity: PropTypes.func.isRequired,
};

export default CitiesList;
