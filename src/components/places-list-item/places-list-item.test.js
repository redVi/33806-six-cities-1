import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

describe(`PlacesListItem`, () => {
  it(`renders correctly with all props`, () => {
    const offer = {
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      bookmark: false,
      premium: true,
      rating: `93%`,
      img: `apartment-01.jpg`,
    };

    const tree = renderer.create(<PlacesListItem offer={offer} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with only required props`, () => {
    const offer = {
      name: `Wood and stone place`,
      price: 80
    };
    const tree = renderer.create(<PlacesListItem offer={offer} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
