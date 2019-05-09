import React from 'react';
import renderer from 'react-test-renderer';
import App from '@/components/app/app.jsx';

describe(`App`, () => {
  it(`renders places correctly`, () => {
    const offers = [
      {name: `Canal View Prinsengracht`, price: 132, width: `70%`},
      {name: `Nice, cozy, warm big bed apartment`, price: 180, width: `100%`},
    ];
    const tree = renderer.create(<App offers={offers} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
