import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlacesList from '@/components/places-list/places-list.jsx';

configure({adapter: new Adapter()});

describe(`PlacesList`, () => {
  it(`should receive correct data about selected card`, () => {
    const offers = [
      {
        name: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        price: 120,
        bookmark: false,
        premium: true,
        rating: `93%`,
        img: `apartment-01.jpg`,
      },
      {
        name: `Wood and stone place`,
        type: `Private room`,
        price: 80,
        bookmark: true,
        premium: false,
        rating: `80%`,
        img: `room.jpg`,
      }
    ];
    const wrapper = mount(<PlacesList offers={offers} />);

    wrapper.find(`.place-card__image-wrapper a`).at(0).simulate(`click`);
    expect(wrapper.state().activeOffer).toStrictEqual(offers[0]);

    wrapper.find(`.place-card__image-wrapper a`).at(1).simulate(`click`);
    expect(wrapper.state().activeOffer).toStrictEqual(offers[1]);
  });
});
