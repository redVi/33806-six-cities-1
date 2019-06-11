import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from '@/components/error-message/error-message';

describe(`ErrorMessage`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<ErrorMessage error="You failed" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
