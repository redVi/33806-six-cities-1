import React from 'react';
import PropTypes from 'prop-types';

import CardsListItem from '@/components/cards-list-item/cards-list-item.jsx';

const CardsList = ({places}) =>
  <div className="cities__places-list places__list tabs__content">
    {places.map((place, index) => <CardsListItem place={place} key={index} />)}
  </div>;

CardsList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default CardsList;
