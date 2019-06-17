import api from "@/api/config";

const URL = "/favorite";

const Favorites = {
  get: () => api.get(URL),
  post: (hotelId: number, status: number) => api.post(`${URL}/${hotelId}/${status}`)
};

export default Favorites;
