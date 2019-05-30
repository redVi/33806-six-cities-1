import {normalizeKeys} from '@/helpers';

const initialState = {
  isAuthorizationRequired: false,
  user: {},
};

const TYPE = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER: `GET_USER`,
  REMOVE_USER: `REMOVE_USER`
};

const userActionCreator = {
  changeAuthorization: (isAuthRequired) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isAuthRequired
  }),
  getUser: (user) => ({
    type: TYPE.GET_USER,
    payload: user
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload
      });
    case TYPE.GET_USER:
      return Object.assign({}, state, {
        user: normalizeKeys(action.payload)
      });
    case TYPE.REMOVE_USER:
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
