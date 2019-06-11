import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from '@/components/cities-list/cities-list';

describe(`CitiesList`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
        <CitiesList
          items={[`Berlin`, `Amsterdam`, `Paris`]}
          current={`Berlin`}
          onClick={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
