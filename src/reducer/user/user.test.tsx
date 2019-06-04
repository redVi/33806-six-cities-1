import {userActionCreator, TYPE} from './user';

describe(`User's reducers`, () => {
  it(`should correct check the authorization`, () => {
    expect(userActionCreator.changeAuthorization(true)).toEqual({
      type: TYPE.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });

  it(`should return correct user data`, () => {
    expect(userActionCreator.logIn({email: `Oliver@test.com`})).toEqual({
      type: TYPE.LOGIN,
      payload: {email: `Oliver@test.com`}
    });
  });
});
