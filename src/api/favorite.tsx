import api from '@/api/config';

const URL = `/hotels`;

const Favorite = {
  get: () => api.get(URL),
  post: (hotelId: number, status: number) => api.post(`${URL}/${hotelId}/${status}`)
};

export default Favorite;
