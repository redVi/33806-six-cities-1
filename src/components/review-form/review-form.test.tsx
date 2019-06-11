import React from 'react';
import renderer from 'react-test-renderer';
import {ReviewForm} from '@/components/review-form/review-form';

const form = {
  rating: 5,
  comment: `Nice place`
}

describe(`PreviewForm`, () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <ReviewForm
        id={50}
        disabled={true}
        comment={form}
        form={form}
        errors={{}}
        onChange={jest.fn()}
        onSubmit={jest.fn()}
        onError={jest.fn()}
        onSendForm={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
