import React from 'react';
import renderer from 'react-test-renderer';
import MainHeader from '@/components/main-header/main-header.jsx';

describe(`MainHeader`, () => {
  it(`renders correctly when user not logged in`, () => {
    const tree = renderer.create(<MainHeader isAuthorizationRequired={true} user={{}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly when user logged in`, () => {
    const tree = renderer.create(
        <MainHeader
          isAuthorizationRequired={false}
          user={{email: `Oliver.conner@gmail.com`}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
