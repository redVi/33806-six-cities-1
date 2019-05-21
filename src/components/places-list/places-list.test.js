import React from 'react';
import renderer from 'react-test-renderer';
import PlacesList from '@/components/places-list/places-list.jsx';

describe(`PlacesList`, () => {
  it(`renders correctly with props`, () => {
    const offers = [
      {name: `Canal View Prinsengracht`, price: 132},
      {name: `Nice, cozy, warm big bed apartment`, price: 180},
    ];

    const tree = renderer.create(<PlacesList offers={offers} handleImageClick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without props`, () => {
    const tree = renderer.create(<PlacesList offers={[]} handleImageClick={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
