import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '@/api';
import {Service} from '@/reducer/data/data';
import {TYPE, actionCreator} from './data';

describe(`Data reducers`, () => {
  it(`should return the correct value when the city changes`, () => {
    expect(actionCreator.changeCity(`Paris`)).toEqual({
      type: TYPE.CHANGE_CITY,
      payload: `Paris`
    });
  });

  it(`should make correct API call to /hotels`, () => {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const fetchOffers = Service.fetchOffers;

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return fetchOffers(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: TYPE.FETCH_OFFERS,
        payload: [{fake: true}]
      });
    });
  });
});
