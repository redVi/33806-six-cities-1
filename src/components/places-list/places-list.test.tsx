import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlacesList from '@/components/places-list/places-list';

describe(`PlacesList`, () => {
  it(`renders correctly with props`, () => {
    const offers = [
      {id: 1, title: `Canal View Prinsengracht`, price: 180, rating: 3.2, city: {name: `Amsterdam`}},
      {id: 2, title: `Nice, cozy, warm big bed apartment`, price: 120, rating: 4.5, city: {name: `Amsterdam`}},
    ];

    const tree = renderer.create(
        <Router>
          <PlacesList places={offers} onImageClick={jest.fn()} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
