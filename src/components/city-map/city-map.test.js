import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from '@/components/city-map/city-map.jsx';

describe(`CityMap`, () => {
  it(`renders correctly`, () => {
    const offers = [
      {name: `Canal View Prinsengracht`, price: 132, coordinates: [52.3909553943508, 4.85309666406198]},
      {name: `Nice, cozy, warm big bed apartment`, price: 180, coordinates: [52.369553943508, 4.85309666406198]},
    ];

    const tree = renderer.create(<CityMap offers={offers} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

