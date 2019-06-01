import React from 'react';
import renderer from 'react-test-renderer';
import Favorites from '@/components/favorites/favorites.jsx';

describe(`Favorites`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Favorites />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
