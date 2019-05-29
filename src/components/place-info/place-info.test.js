import React from 'react';
import renderer from 'react-test-renderer';
import PlaceInfo from '@/components/place-info/place-info.jsx';

describe(`PlaceInfo`, () => {
  it(`renders correctly with props`, () => {
    const place = {
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      isFavorite: true,
      isPremium: true,
      rating: 4.1,
      previewImage: `apartment-01.jpg`,
    };
    const tree = renderer.create(<PlaceInfo {...place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with only required props`, () => {
    const place = {
      title: `Beautiful & luxurious apartment at great location`,
      price: 120,
      rating: 0,
    };
    const tree = renderer.create(<PlaceInfo {...place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
