import api from '@/api/config';

const URL = `/comments`;

const Comments = {
  get: (hotelId) => api.get(`${URL}/${hotelId}`),
  post: (hotelId, comment) => api.post(`${URL}/${hotelId}`, comment)
};

export default Comments;
