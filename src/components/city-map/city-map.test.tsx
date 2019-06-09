import React from 'react';
import renderer from 'react-test-renderer';
import CityMap from '@/components/city-map/city-map';

const items = [
  {id: 1, location: {latitude: 51.23, longitude: 6.80, zoom: 13}},
  {id: 2, location: {latitude: 51.24, longitude: 6.81, zoom: 13}},
];

describe(`CityMap`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <CityMap
          items={items}
          location={{latitude: 51.225402, longitude: 6.776314, zoom: 13}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

