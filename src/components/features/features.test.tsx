import React from 'react';
import renderer from 'react-test-renderer';
import Features from '@/components/features/features';

describe(`Features`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <Features type="room" maxAdults={2} bedrooms={2} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
