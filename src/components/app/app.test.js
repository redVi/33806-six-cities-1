import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '@/components/app/app.jsx';

describe(`App`, () => {
  const offers = [
    {
      title: `Wood and stone place`,
      type: `Private room`,
      price: 80,
      isFavorite: true,
      isPremium: false,
      rating: 4.2,
      previewImage: `room.jpg`,
    }
  ];
  it(`renders places correctly`, () => {
    const tree = renderer.create(
        <App
          isAuthorizationRequired={false}
          user={{}}
          offers={offers}
          cities={[`Paris`, `Cologne`, `Amsterdam`]}
          city={{
            name: `Amsterdam`,
            location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
          }}
          changeCity={jest.fn()}
          getCityOffers={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
