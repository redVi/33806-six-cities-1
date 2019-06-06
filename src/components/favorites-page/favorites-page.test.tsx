import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {FavoritesPage} from '@/components/favorites-page/favorites-page';

describe(`Favorites`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <Router>
        <FavoritesPage favorites={[]} fetchFavorites={jest.fn()} />
      </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
