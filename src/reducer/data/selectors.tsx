import {createSelector} from 'reselect';
import {offerType} from '@/types';
import NameSpace from '@/reducer/namespaces';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state: object) => state[NAME_SPACE].offers;
export const getCity = (state: object) => state[NAME_SPACE].city;
export const getComments = (state: object) => state[NAME_SPACE].comments;

export const getSelectedOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => offers.filter((o: offerType) => o.city.name === city.name)
);

export const getCities = createSelector(
    [getOffers],
    (offers) => Array.from(new Set(offers.map((o) => o.city.name))).slice(0, 6),
);

export const getFavorites = createSelector(
  [getOffers],
  (offers) => offers.filter((o: offerType) => o.isFavorite)
);
