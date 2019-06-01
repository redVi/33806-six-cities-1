import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainHeader from '@/components/main-header/main-header.jsx';

describe(`MainHeader`, () => {
  it(`renders correctly when user not logged in`, () => {
    const tree = renderer.create(
        <Router>
          <MainHeader isAuthorizationRequired={true} user={{}} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly when user logged in`, () => {
    const tree = renderer.create(
        <Router>
          <MainHeader
            isAuthorizationRequired={false}
            user={{email: `Oliver.conner@gmail.com`}} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
