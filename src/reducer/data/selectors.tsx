import {createSelector} from 'reselect';
import {offer} from '@/types';
import NameSpace from '@/reducer/namespaces';

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state: object) => state[NAME_SPACE].offers;

export const getCity = (state: object) => state[NAME_SPACE].city;

export const getSelectedOffers = createSelector(
    [getOffers, getCity],
    (offers, city) => offers.filter((offer: offer) => offer.city.name === city.name)
);

export const getCities = createSelector(
    [getOffers],
    (offers) => Array.from(new Set(offers.map((offer) => offer.city.name))).slice(0, 6),
);