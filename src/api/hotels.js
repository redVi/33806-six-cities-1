import api from '@/api/config';

const Hotels = {
  get: () => api.get(`/hotels`)
};

export default Hotels;
