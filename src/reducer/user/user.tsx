import {normalizeKeys} from '@/helpers';
import {offerType} from "@/types";

enum TYPE {
  REQUIRED_AUTHORIZATION = 'REQUIRED_AUTHORIZATION',
  FETCH_FAVORITES = 'FETCH_FAVORITES',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
}

interface ActionType {
  type: TYPE,
  payload: any
}

const initialState = {
  isLoggedIn: undefined,
  user: {},
  favorites: []
};

const userActionCreator = {
  logIn: (user: object) => ({
    type: TYPE.LOGIN,
    payload: user
  }),
  logOut: () => ({
    type: TYPE.LOGOUT
  }),
  changeAuthorization: (isLoggedIn: boolean) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isLoggedIn
  }),
  fetchFavorites: (favorites: offerType[]) => ({
    type: TYPE.FETCH_FAVORITES,
    payload: favorites
  })
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case TYPE.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        isLoggedIn: action.payload
      };
    case TYPE.FETCH_FAVORITES:
      return {
        ...state,
        favorites: normalizeKeys(action.payload)
      };
    case TYPE.LOGIN:
      return {
        ...state,
        user: normalizeKeys(action.payload),
        isLoggedIn: true
      };
    case TYPE.LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false
      };
  }

  return state;
};

export {
  userActionCreator,
  reducer,
  TYPE
};
