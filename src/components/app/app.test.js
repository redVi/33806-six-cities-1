import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '@/components/app/app.jsx';

describe(`App`, () => {
  const offers = [
    {
      name: `Wood and stone place`,
      type: `Private room`,
      price: 80,
      bookmark: true,
      premium: false,
      rating: `80%`,
      img: `room.jpg`,
    }
  ];
  it(`renders places correctly`, () => {
    const tree = renderer.create(<App offers={offers} getCityOffers={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
