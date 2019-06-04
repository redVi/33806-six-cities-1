import {normalizeKeys} from '@/helpers';

enum TYPE {
  REQUIRED_AUTHORIZATION = 'REQUIRED_AUTHORIZATION',
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT'
};

interface ActionType {
  type: TYPE,
  payload: any
}

const initialState = {
  isAuthorizationRequired: false,
  user: {},
};

const userActionCreator = {
  logIn: (user: object) => ({
    type: TYPE.LOGIN,
    payload: user
  }),
  logOut: () => ({
    type: TYPE.LOGOUT
  }),
  changeAuthorization: (isAuthRequired: boolean) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isAuthRequired
  })
};

const reducer = (state = initialState, action: ActionType) => {
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
