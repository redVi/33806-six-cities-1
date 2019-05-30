import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '@/components/main-page/main-page.jsx';

const cities = [`Berlin`, `Amsterdam`, `Dusseldorf`];

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const offers = [
      {title: `Canal View Prinsengracht`, price: 132, rating: 3.2, city: {name: `Berlin`}},
      {title: `Nice, cozy, warm big bed apartment`, price: 180, rating: 4.3, city: {name: `Amsterdam`}},
    ];

    const tree = renderer.create(
        <MainPage
          offers={offers}
          cities={cities}
          city={{
            name: `Berlin`,
            location: {latitude: 51.225402, longitude: 6.776314, zoom: 13}
          }}
          handleSelectCity={jest.fn()}
          changeCity={jest.fn(`Berlin`)} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
