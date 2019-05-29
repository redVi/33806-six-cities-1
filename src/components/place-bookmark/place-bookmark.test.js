import React from 'react';
import renderer from 'react-test-renderer';
import PlaceBookmark from '@/components/place-bookmark/place-bookmark.jsx';

describe(`PlaceBookmark`, () => {
  it(`renders correctly with props`, () => {
    const tree = renderer.create(<PlaceBookmark isFavorite={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without props`, () => {
    const tree = renderer.create(<PlaceBookmark />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
