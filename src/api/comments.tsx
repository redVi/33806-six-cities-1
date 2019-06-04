import api from '@/api/config';

const URL = `/comments`;

const Comments = {
  get: (hotelId: number) => api.get(`${URL}/${hotelId}`),
  post: (hotelId: number, comment: object) => api.post(`${URL}/${hotelId}`, comment)
};

export default Comments;
