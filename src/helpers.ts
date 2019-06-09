import {offerType} from '@/types';

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

const snakeToCamel = (word: string): string => word.replace(
    /(_\w)/g,
    (matches) => matches[1].toUpperCase()
);

const normalizeKeys = (obj: object): object => {
  if (Array.isArray(obj)) {
    return obj.map((item) => normalizeKeys(item));
  }

  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => ({
      ...result,
      [snakeToCamel(key)]: normalizeKeys(obj[key])
    }), {});
  }

  return obj;
};

const sortByField = (arr: offerType[], value: string, field: string): offerType[] => {
  switch (field) {
    case `ASC`: return arr.sort((a, b) => a[value] - b[value]);
    case `DESC`: return arr.sort((a, b) => b[value] - a[value]);
    default: return arr;
  }
};

export {
  getRandomNumber,
  normalizeKeys,
  sortByField
};
