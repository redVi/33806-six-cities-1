import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import HeaderLink from '@/components/header-link/header-link.jsx';

describe(`HeaderLink`, () => {
  it(`renders correctly when user isn't logged in`, () => {
    const tree = renderer.create(
        <Router>
          <HeaderLink link="/login" text="Sign In" />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly when user is logged in`, () => {
    const tree = renderer.create(
        <Router>
          <HeaderLink
            link="/favorites"
            text="jack-sparrow@pirates.com"
            linkClass="user-name user__name"
            bg={{backgroundImage: `url("https://pirates.com/uploads/avatar.jpg")`}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
