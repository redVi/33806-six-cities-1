import React from 'react';
import renderer from 'react-test-renderer';
import PlacesListItem from '@/components/places-list-item/places-list-item.jsx';

describe(`PlacesListItem`, () => {
  it(`renders correctly with all props`, () => {
    const offer = {
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      isFavorite: false,
      isPremium: true,
      rating: 3.6,
      previewImage: `apartment-01.jpg`,
    };

    const tree = renderer.create(<PlacesListItem offer={offer} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with only required props`, () => {
    const offer = {
      title: `Wood and stone place`,
      price: 80
    };
    const tree = renderer.create(<PlacesListItem offer={offer} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
