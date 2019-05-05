import React from 'react';
import renderer from 'react-test-renderer';
import PlaceInfo from '@/components/place-info/place-info.jsx';

describe(`PlaceInfo`, () => {
  it(`renders correctly with props`, () => {
    const place = {
      name: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      bookmark: true,
      premium: true,
      rating: `93%`,
      img: `apartment-01.jpg`,
    };
    const tree = renderer.create(<PlaceInfo {...place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly with only required props`, () => {
    const place = {
      name: `Beautiful & luxurious apartment at great location`,
      price: 120,
    };
    const tree = renderer.create(<PlaceInfo {...place} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
