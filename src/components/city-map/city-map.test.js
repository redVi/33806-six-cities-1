import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from '@/components/city-map/city-map.jsx';

describe(`CityMap`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <CityMap coordinates={[[52.3, 4.8], [52.3, 4.8]]} center={[52, 4]}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

