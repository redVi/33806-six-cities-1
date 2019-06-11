import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import Offers from '@/components/offers/offers';

const renderer = new ShallowRenderer();

const items = [
  {id: 1, location: {latitude: 51.23, longitude: 6.80, zoom: 13}, title: 'Title', rating: 0, price: 320},
  {id: 2, location: {latitude: 51.24, longitude: 6.81, zoom: 13}, title: 'Title', rating: 3.4, price: 120},
];

const city = {
  name: `Amsterdam`,
  location: {
    latitude: 51.23,
    longitude: 51.24,
    zoom: 13
  }
}

describe(`Offers`, () => {
  it(`renders correctly`, () => {
    renderer.render(
      <Offers
        items={items}
        city={city}
        activeItem={items[0]}
        handleChangeOffersFilter={jest.fn()}
        setActiveItem={jest.fn()} />
    );

    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
