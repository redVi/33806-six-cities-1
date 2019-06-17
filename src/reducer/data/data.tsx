import {getRandomNumber, normalizeKeys} from "@/helpers";
import {OfferType} from "@/types";

enum TYPE {
  CHANGE_CITY = "CHANGE_CITY",
  FETCH_OFFERS = "FETCH_OFFERS",
  FETCH_COMMENTS = "FETCH_COMMENTS",
  UPDATE_OFFER = "UPDATE_OFFER"
}

interface ActionType {
  type: TYPE;
  payload: any;
}

function getRandomCity(offers: OfferType[]) {
  return offers.length ? offers[getRandomNumber(1, offers.length)].city : {};
}

function getCityFromOffers(offers: OfferType[], cityName: string) {
  return offers.filter((o) => o.city.name === cityName)[0].city;
}

function updateOffer(offers: OfferType[], current: OfferType) {
  return offers.map(offer => offer.id === current.id ? current : offer);
}

const initialState = {
  city: {},
  offers: [],
  comments: []
};

const dataActionCreator = {
  changeCity: (city: string) => ({
    type: TYPE.CHANGE_CITY,
    payload: city
  }),
  fetchOffers: (offers: OfferType[]) => ({
    type: TYPE.FETCH_OFFERS,
    payload: offers
  }),
  fetchComments: (comments) => ({
    type: TYPE.FETCH_COMMENTS,
    payload: comments
  }),
  updateOffer: (offer: OfferType) => ({
    type: TYPE.UPDATE_OFFER,
    payload: offer
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
    case TYPE.UPDATE_OFFER:
      return {
        ...state,
        offers: normalizeKeys(updateOffer(state.offers, action.payload))
      };
    case TYPE.CHANGE_CITY:
      return {
        ...state,
        city: getCityFromOffers(state.offers, action.payload)
      };
    case TYPE.FETCH_COMMENTS:
      return {
        ...state,
        comments: normalizeKeys(action.payload)
      };
  }

  return state;
};

export {
  dataActionCreator,
  TYPE,
  reducer
};
