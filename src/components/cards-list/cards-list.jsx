import React from 'react';
import PropTypes from 'prop-types';

import CardItem from '@/components/card-item/card-item.jsx';

const CardsList = ({places}) =>
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, index) => <CardItem place={place} key={index} />)}
  </div>;

CardsList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default CardsList;
