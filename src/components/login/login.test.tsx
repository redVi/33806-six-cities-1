import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from '@/components/login/login';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <Login onChange={jest.fn()} logIn={jest.fn()} disabled={true} errors={{}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
