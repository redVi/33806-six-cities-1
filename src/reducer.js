import {normalizeKeys, getRandomNumber} from '@/helpers';

const initialState = {
  city: {},
  offers: [],
  isAuthorizationRequired: false,
};

const TYPE = {
  CHANGE_CITY: `CHANGE_CITY`,
  FETCH_OFFERS: `FETCH_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

const Service = {
  fetchOffers: (dispatch, _getState, api) =>
    api.get(`/hotels`).then((response) => {
      dispatch(actionCreator.fetchOffers(
          response.data.map((offer) => normalizeKeys(offer))
      ));
    })
};

const actionCreator = {
  changeCity: (city) => ({
    type: TYPE.CHANGE_CITY,
    payload: city
  }),
  fetchOffers: (offers) => ({
    type: TYPE.FETCH_OFFERS,
    payload: offers
  }),
  checkAuthorization: (isAuthRequired) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isAuthRequired
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.CHANGE_CITY:
      return Object.assign({}, state, {
        city: state.offers.filter((offer) => offer.city.name === action.payload)[0].city
      });
    case TYPE.FETCH_OFFERS:
      return Object.assign({}, state, {
        city: action.payload[getRandomNumber(1, action.payload.length)].city,
        offers: action.payload,
      });
    case TYPE.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
  }

  return state;
};

export {
  TYPE,
  actionCreator,
  reducer,
  Service
};
