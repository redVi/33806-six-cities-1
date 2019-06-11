import React from 'react';
import renderer from 'react-test-renderer';
import Host from '@/components/host/host';

describe(`Host`, () => {
  it(`renders correctly`, () => {
    const host = { name: `Maria`, avatarUrl: `maria.jpg`, isPro: true, description: "Hello" }
    const tree = renderer.create(<Host host={host} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
