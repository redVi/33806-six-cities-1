const initialState = {
  city: `Amsterdam`,
  offers: require(`@/mocks/offers`).offers
};

const TYPE = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const actionCreator = {
  changeCity: (city) => ({
    type: TYPE.CHANGE_CITY,
    payload: city
  })
};

const reducer = (state = initialState, action) => {
  if (action.type === TYPE.CHANGE_CITY) {
    return Object.assign({}, state, {
      city: action.payload
    });
  }

  return state;
};

export {
  TYPE,
  actionCreator,
  reducer
};
