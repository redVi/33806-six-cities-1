import {createSelector} from 'reselect';
import NameSpace from '@/reducer/namespaces';
import {normalizeKeys} from '@/helpers';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => state[NAME_SPACE].offers;

export const getCity = (state) => state[NAME_SPACE].city;

export const getSelectedOffers = createSelector(
    [getOffers, getCity],
    (offers, city) =>
      offers
        .map((offer) => normalizeKeys(offer))
        .filter((offer) => offer.city.name === city.name)
);

export const getCities = createSelector(
    [getOffers],
    (offers) => Array.from(new Set(offers.map((offer) => offer.city.name))).slice(0, 6),
);
