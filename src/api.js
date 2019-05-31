import axios from 'axios';
import {userActionCreator} from '@/reducer/user/user';

export const BASE_URL = `https://es31-server.appspot.com/six-cities`;

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      dispatch(userActionCreator.changeAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
