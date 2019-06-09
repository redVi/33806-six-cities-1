import React from 'react';
import renderer from 'react-test-renderer';
import {Login} from '@/components/login/login';

describe(`SignIn`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Login logIn={jest.fn()}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
