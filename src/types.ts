type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number
}

type OfferType = {
  id: number,
  description?: string,
  title: string,
  rating: number,
  price: number,
  isPremium?: boolean,
  isFavorite?: boolean,
  previewImage?: string,
  type?: string,
  bedrooms?: number,
  maxAdults?: number,
  images?: string[],
  goods?: string[],
  host?: HostType,
  location?: LocationType,
  city?: CityType
}

type CityType = {
  name: string,
  location?: LocationType
};

type HostType = {
  name: string,
  avatarUrl: string,
  isPro: boolean,
  description: string
}

type CommentType = {
  id: number,
  rating: number,
  comment: string,
  date: any,
  user: {
    name: string,
    avatarUrl: string
  }
}

export {
  LocationType,
  CityType,
  OfferType,
  HostType,
  CommentType
}
