import React from 'react';
import renderer from 'react-test-renderer';
import {Bookmark} from '@/components/bookmark/bookmark';

describe(`Bookmark`, () => {
  it(`renders correctly with props`, () => {
    const tree = renderer.create(<Bookmark isFavorite={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
