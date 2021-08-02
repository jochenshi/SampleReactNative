import axios from 'axios';
import {addLoading, removeLoading} from 'src/slices/globalSlice.js';

export const initalizeRequest = () => {
  axios.interceptors.request.use(
    (config) => {

      return config;
    }
  );
  axios.interceptors.response.use(
    (response) => {
      console.log(1, response);
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
