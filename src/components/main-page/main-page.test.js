import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '@/components/main-page/main-page.jsx';

describe(`MainPage`, () => {
  it(`renders correctly with props`, () => {
    const offers = [
      {name: `Canal View Prinsengracht`, price: 132},
      {name: `Nice, cozy, warm big bed apartment`, price: 180},
    ];

    const tree = renderer.create(<MainPage offers={offers} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without props`, () => {
    const tree = renderer.create(<MainPage offers={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
