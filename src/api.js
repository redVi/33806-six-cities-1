import axios from 'axios';
import {actionCreator} from '@/reducer/user/user';

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    console.log(err);
    if (err.response.status === 401) {
      dispatch(actionCreator.checkAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
