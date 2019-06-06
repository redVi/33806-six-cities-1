import {getRandomNumber, normalizeKeys} from '@/helpers';
import {offer} from '@/types';

enum TYPE {
  CHANGE_CITY = 'CHANGE_CITY',
  FETCH_OFFERS = 'FETCH_OFFERS',
}

interface ActionType {
  type: TYPE,
  payload: any
}

const getRandomCity = (offers: offer[]) => offers.length ? offers[getRandomNumber(1, offers.length)].city : {};
const getCityFromOffers = (offers, cityName) => offers.filter((o) => o.city.name === cityName)[0].city;

const initialState = {
  city: {},
  offers: []
};

const dataActionCreator = {
  changeCity: (city: string) => ({
    type: TYPE.CHANGE_CITY,
    payload: city
  }),
  fetchOffers: (offers: offer[]) => ({
    type: TYPE.FETCH_OFFERS,
    payload: offers
  })
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case TYPE.FETCH_OFFERS:
      return {
        ...state,
        city: getRandomCity(action.payload),
        offers: normalizeKeys(action.payload),
      };
    case TYPE.CHANGE_CITY:
      return {
        ...state,
        city: getCityFromOffers(state.offers, action.payload)
      };
  }

  return state;
};

export {
  dataActionCreator,
  TYPE,
  reducer
};
