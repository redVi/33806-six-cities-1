import React from 'react';
import renderer from 'react-test-renderer';
import CardsListItem from '@/components/cards-list-item/cards-list-item.jsx';

describe(`CardsListItem`, () => {
  it(`renders correctly with all props`, () => {
    const place = {
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      bookmark: false,
      premium: true,
      rating: `93%`,
      img: `apartment-01.jpg`,
    };

    const tree = renderer.create(<CardsListItem place={place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with only required props`, () => {
    const place = {
      name: `Wood and stone place`,
      price: 80
    };
    const tree = renderer.create(<CardsListItem place={place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
