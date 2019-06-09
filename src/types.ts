type locationType = {
  latitude: number,
  longitude: number,
  zoom: number
}

type offerType = {
  id: number,
  description: string,
  title: string,
  rating: number,
  price: number,
  isPremium?: number,
  isFavorite: boolean,
  previewImage: string,
  type: string,
  bedrooms: number,
  maxAdults: number,
  images: string[],
  goods: string[],
  host?: hostType,
  location: locationType,
  city: cityType
}

type cityType = {
  name: string,
  location: locationType
};

type hostType = {
  name: string,
  avatarUrl: string,
  isPro: boolean
}

export {
  locationType,
  cityType,
  offerType,
  hostType
}
