import {normalizeKeys} from '@/helpers';

const initialState = {
  isAuthorizationRequired: false,
  user: {},
};

const TYPE = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOGIN: `LOGIN`,
  LOGOUT: `LOGOUT`
};

const userActionCreator = {
  logIn: (user) => ({
    type: TYPE.LOGIN,
    payload: user
  }),
  logOut: () => ({
    type: TYPE.LOGOUT
  }),
  changeAuthorization: (isAuthRequired) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isAuthRequired
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case TYPE.LOGIN:
      return Object.assign({}, state, {
        user: normalizeKeys(action.payload),
        isAuthorizationRequired: false
      });
    case TYPE.LOGOUT:
      return Object.assign({}, state, {
        user: {},
        isAuthorizationRequired: true
      });
  }

  return state;
};

export {
  userActionCreator,
  reducer,
  TYPE
};
