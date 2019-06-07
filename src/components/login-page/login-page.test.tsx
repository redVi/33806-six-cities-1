import React from 'react';
import renderer from 'react-test-renderer';
import {LoginPage} from '@/components/login-page/login-page';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<LoginPage logIn={jest.fn()}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
