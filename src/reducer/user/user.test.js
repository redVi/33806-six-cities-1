import {userActionCreator, TYPE} from './user';

describe(`User's reducers`, () => {
  it(`should correct check the authtorization`, () => {
    expect(userActionCreator.changeAuthorization(true)).toEqual({
      type: TYPE.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });

  it(`should return correct user data`, () => {
    expect(userActionCreator.getUser({login: `Oliver`})).toEqual({
      type: TYPE.GET_USER,
      payload: {login: `Oliver`}
    });
  });
});
