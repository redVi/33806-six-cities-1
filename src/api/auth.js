import api from '@/api/config';

const URL = `/login`;

const Auth = {
  get: () => api.get(URL),
  post: (form) => api.post(URL, form)
};

export default Auth;
