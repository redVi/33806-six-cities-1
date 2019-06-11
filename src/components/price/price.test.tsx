import React from 'react';
import renderer from 'react-test-renderer';
import Price from '@/components/price/price';

describe(`Price`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(<Price price={128} text="/night" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
