import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {App} from '@/components/app/app';

describe(`App`, () => {
  const offers = [
    {
      id: 1,
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
        <Router>
          <App
            user={{}}
            offers={offers}
            cities={[`Paris`, `Cologne`, `Amsterdam`]}
            city={{
              name: `Amsterdam`,
              location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
            }}
            logIn={jest.fn()}
            logOut={jest.fn()}
            changeCity={jest.fn()}
            fetchOffers={jest.fn()} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});