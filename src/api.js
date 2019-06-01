import axios from 'axios';

export const BASE_URL = `https://es31-server.appspot.com/six-cities`;

export const configureAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === 403) {
      onLoginFail();
    }
    onLoginFail();

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
