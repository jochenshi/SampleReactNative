import axios from 'axios';

export const initalizeRequest = () => {
  axios.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
