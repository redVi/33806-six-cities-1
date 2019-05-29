import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from '@/components/city-map/city-map.jsx';

describe(`CityMap`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <CityMap
          coordinates={[{latitude: 51.232402, longitude: 6.800314, zoom: 16}]}
          location={{latitude: 51.225402, longitude: 6.776314, zoom: 13}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

