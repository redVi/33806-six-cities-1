import {reducer, TYPE} from "./user";

const initialState = {
  isLoggedIn: undefined,
  user: {},
  favorites: []
};

describe("User reducer", () => {
  it("should handle REQUIRED_AUTHORIZATION", () => {
    const action = {
      type: TYPE.REQUIRED_AUTHORIZATION,
      payload: false,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: false
    });
  });

  it("should handle FETCH_FAVORITES", () => {
    const action = {
      type: TYPE.FETCH_FAVORITES,
      payload: [
        {id: 1, title: "Favorite house"},
        {id: 1, title: "Favorite hotel"},
      ],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      favorites: action.payload
    });
  });

  it("should handle LOGIN", () => {
    const action = {
      type: TYPE.LOGIN,
      payload: {name: "Jack", email: "jack@test.com"},
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoggedIn: true,
      user: action.payload
    });
  });

  it("should handle LOGOUT", () => {
    const state = {...initialState, user: {name: "Jack"}, isLoggedIn: true};
    const action = {type: TYPE.LOGOUT, payload: undefined};

    expect(reducer(initialState, action)).toEqual({
      ...state,
      isLoggedIn: false,
      user: {}
    });
  });
});
