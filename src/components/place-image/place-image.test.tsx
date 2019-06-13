import React from 'react';
import renderer from 'react-test-renderer';
import PlaceImage from '@/components/place-image/place-image';

describe(`PlaceImage`, () => {
  it(`renders correctly without props`, () => {
    const tree = renderer.create(<PlaceImage onClick={jest.fn()} previewImage="preview.jpg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
