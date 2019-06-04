import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlacesList from '@/components/places-list/places-list';

describe(`PlacesList`, () => {
  it(`renders correctly with props`, () => {
    const offers = [
      {id: 1, title: `Canal View Prinsengracht`, price: 132},
      {id: 2, title: `Nice, cozy, warm big bed apartment`, price: 180},
    ];

    const tree = renderer.create(
        <Router>
          <PlacesList places={offers} handleImageClick={jest.fn()} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without props`, () => {
    const tree = renderer.create(
        <Router>
          <PlacesList offers={[]} handleImageClick={jest.fn()} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
