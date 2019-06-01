import {getRandomNumber, normalizeKeys} from '@/helpers';

const getCityFromOffers = (offers, cityName) =>
  offers.filter((offer) => offer.city.name === cityName)[0].city;

const initialState = {
  city: {},
  offers: [],
};

const TYPE = {
  CHANGE_CITY: `CHANGE_CITY`,
  FETCH_OFFERS: `FETCH_OFFERS`,
};

const dataActionCreator = {
  changeCity: (city) => ({
    type: TYPE.CHANGE_CITY,
    payload: city
  }),
  fetchOffers: (offers) => ({
    type: TYPE.FETCH_OFFERS,
    payload: offers
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.FETCH_OFFERS:
      return Object.assign({}, state, {
        city: action.payload[getRandomNumber(1, action.payload.length)].city,
        offers: normalizeKeys(action.payload),
      });
    case TYPE.CHANGE_CITY:
      return Object.assign({}, state, {
        city: getCityFromOffers(state.offers, action.payload)
      });
  }

  return state;
};

export {
  dataActionCreator,
  TYPE,
  reducer
};
