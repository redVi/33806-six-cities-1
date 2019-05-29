import {actionCreator, TYPE} from './user';

describe(`User's reducers`, () => {
  it(`should correct check the authtorization`, () => {
    expect(actionCreator.checkAuthorization(true)).toEqual({
      type: TYPE.REQUIRED_AUTHORIZATION,
      payload: true
    });
  });
});
