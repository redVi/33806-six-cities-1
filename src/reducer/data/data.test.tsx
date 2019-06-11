import {reducer, TYPE} from './data';

const initialState = {
  'city': {},
  'comments': [],
  'offers': []
};

describe(`Data reducer`, () => {
  it(`should handle CHANGE_CITY`, () => {
    const action = {
      type: TYPE.CHANGE_CITY,
      payload: `Amsterdam`,
    };

    initialState.offers = [
      {city: {name: `Paris`}},
      {city: {name: `Amsterdam`}}
    ];

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      city: {name: `Amsterdam`}
    });
  });

  it(`should handle FETCH_OFFERS`, () => {
    const action = {
      type: TYPE.FETCH_OFFERS,
      payload: [
        {id: 1, title: `Hotel`, city: {name: `Paris`}},
        {id: 2, title: `Room`, city: {name: `Berlin`}}
      ],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      offers: action.payload,
      city: {name: `Berlin`}
    });
  });

  it(`should handle FETCH_COMMENTS`, () => {
    const action = {
      type: TYPE.FETCH_COMMENTS,
      payload: [
        {id: 1, rating: 3.2, comment: `Nice place!`}
      ],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      comments: action.payload
    });
  });

  it(`should handle UPDATE_OFFER`, () => {
    const action = {
      type: TYPE.UPDATE_OFFER,
      payload: {id: 1, title: `New Offer`, rating: 4.3, price: 120},
    };

    initialState.offers = [
      {id: 1, title: `Offer1`, rating: 4.3, price: 120},
      {id: 2, title: `Offer2`, rating: 5.3, price: 180}
    ];

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      offers: [
        {id: 1, title: `New Offer`, rating: 4.3, price: 120},
        {id: 2, title: `Offer2`, rating: 5.3, price: 180}
      ]
    });
  });
});
