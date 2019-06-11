import React from 'react';
import renderer from 'react-test-renderer';
import Inside from '@/components/inside/inside';

describe(`Inside`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <Inside title="What&apos;s inside" items={[`Breakfast`, `Towels`]}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
