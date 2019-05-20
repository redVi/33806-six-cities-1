import {TYPE, actionCreator} from '@/reducer';

describe(`Action creators`, () => {
  it(`should return the correct value when the city changes`, () => {
    expect(actionCreator.changeCity(`Paris`)).toEqual({
      type: TYPE.CHANGE_CITY,
      payload: `Paris`
    });
  });
});
