import React from 'react';
import PropTypes from 'prop-types';

import CardListItem from '@/components/card-list-item/card-list-item.jsx';

const CardsList = ({places}) =>
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, index) => <CardListItem place={place} key={index} />)}
  </div>;

CardsList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default CardsList;
