import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MainPage from '@/components/main-page/main-page';

const cities = [`Berlin`, `Amsterdam`, `Dusseldorf`];

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const offers = [
      {id: 1, title: `Canal View Prinsengracht`, price: 132, rating: 3.2, city: {name: `Berlin`}},
      {id: 2, title: `Nice, cozy, warm big bed apartment`, price: 180, rating: 4.3, city: {name: `Amsterdam`}},
    ];

    const tree = renderer.create(
        <Router>
          <MainPage
            offers={offers}
            cities={cities}
            city={{
              name: `Berlin`,
              location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
            }}
            handleSelectCity={jest.fn()}
            changeCity={jest.fn()} />
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
