import {OfferType} from "@/types";

const snakeToCamel = (word: string): string => word.replace(
  /(_\w)/g,
  (matches): string => matches[1].toUpperCase()
);

export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;

export const normalizeKeys = (obj: object): object => {
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

export const sortByField = (arr: OfferType[], value: string, field: string): OfferType[] => {
  switch (field) {
    case "ASC": return arr.sort((a, b) => a[value] - b[value]);
    case "DESC": return arr.sort((a, b) => b[value] - a[value]);
    default: return arr;
  }
};

export const redirectToId = (url: string, history) => history.push(url);
