import axios from 'axios';

export const BASE_URL = `https://es31-server.appspot.com/six-cities`;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true
});

const onSuccess = (response) => response;

const onFail = (err) => {
  if (err.status === 403) {
    history.push(`/login`);
  }

  return Promise.reject(err);
};

api.interceptors.response.use(onSuccess, onFail);

export default api;
