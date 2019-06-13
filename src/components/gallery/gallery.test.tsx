import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '@/components/gallery/gallery';

describe(`Gallery`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <Gallery images={[`apartment.jpg`, `room.jpg`, `house.jpg`]} maxCount={2} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
