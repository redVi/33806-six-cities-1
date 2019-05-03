import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from '@/components/cities-list/cities-list.jsx';

describe(`CitiesList`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<CitiesList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
