import React from 'react';
import renderer from 'react-test-renderer';
import OffersEmpty from '@/components/offers-empty/offers-empty';

describe(`OffersEmpty`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<OffersEmpty />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
