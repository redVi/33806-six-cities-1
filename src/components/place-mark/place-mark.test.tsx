import React from 'react';
import renderer from 'react-test-renderer';
import PlaceMark from '@/components/place-mark/place-mark';

describe(`PlaceMark`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<PlaceMark />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
