import React from 'react';
import renderer from 'react-test-renderer';
import Rating from '@/components/rating/rating';

describe(`Rating`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Rating rating={4.6} className="cool" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
