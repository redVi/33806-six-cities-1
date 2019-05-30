const initialState = {
  isAuthorizationRequired: false,
};

const TYPE = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`
};

const actionCreator = {
  checkAuthorization: (isAuthRequired) => ({
    type: TYPE.REQUIRED_AUTHORIZATION,
    payload: isAuthRequired
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === TYPE.REQUIRED_AUTHORIZATION) {
    return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
  }

  return state;
};

export {
  actionCreator,
  reducer,
  TYPE
};
