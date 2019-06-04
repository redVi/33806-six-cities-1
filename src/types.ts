type location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type offer = {
  id: number,
  title: string,
  price: number,
  type: string,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
  previewImage: string,
  location: location,
  city: city
}

type city = {
  name: string,
  location: location
};

export {
  location,
  offer,
  city
}