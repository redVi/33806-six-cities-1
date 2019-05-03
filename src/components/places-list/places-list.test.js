import React from 'react';
import renderer from 'react-test-renderer';
import CardList from '@/components/places-list/places-list.jsx';

describe(`CardList`, () => {
  it(`renders correctly with props`, () => {
    const places = [
      {name: `Canal View Prinsengracht`, price: 132},
      {name: `Nice, cozy, warm big bed apartment`, price: 180},
    ];

    const tree = renderer.create(<CardList places={places} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly without props`, () => {
    const tree = renderer.create(<CardList places={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
