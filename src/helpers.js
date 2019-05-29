const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const snakeToCamel = word => word.replace(
  /(_\w)/g,
  matches => matches[1].toUpperCase()
);

const normalizeKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(item => normalizeKeys(item));
  }

  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce(
      (result, key) => ({
        ...result,
        [snakeToCamel(key)]: normalizeKeys(obj[key]),
      }),
      {},
    );
  }

  return obj;
};

export {
  getRandomNumber,
  normalizeKeys
}
