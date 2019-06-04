import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainHeader from '@/components/main-header/main-header';

describe(`MainHeader`, () => {
  it(`renders correctly when user not logged in`, () => {
    const tree = renderer.create(
        <Router>
          <MainHeader user={{}} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly when user logged in`, () => {
    const tree = renderer.create(
        <Router>
          <MainHeader user={{
            email: `Oliver.conner@gmail.com`,
            avatarUrl: `/jack-avatar.webp`
          }} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
