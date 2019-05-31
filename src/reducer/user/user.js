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
        user: normalizeKeys(action.payload)
      });
    case TYPE.LOGOUT:
      return Object.assign({}, state, {
        user: {},
      });
  }

  return state;
};

export {
  userActionCreator,
  reducer,
  TYPE
};
