import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '@/components/main-page/main-page.jsx';

const cities = [`Berlin`, `Amsterdam`, `Dusseldorf`];

describe(`MainPage`, () => {
  it(`renders correctly`, () => {
    const offers = [
      {name: `Canal View Prinsengracht`, price: 132},
      {name: `Nice, cozy, warm big bed apartment`, price: 180},
    ];

    const tree = renderer.create(
        <MainPage
          offers={offers}
          cities={cities}
          city={`Berlin`}
          handleSelectCity={jest.fn()}
          changeCity={jest.fn(`Berlin`)} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
