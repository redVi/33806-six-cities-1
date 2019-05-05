import React from 'react';
import renderer from 'react-test-renderer';
import MainHeader from '@/components/main-header/main-header.jsx';

describe(`MainHeader`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<MainHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
