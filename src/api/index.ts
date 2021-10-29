import axios from "axios";
const baseURL = `https://api.github.com/`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((request) => {
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  ({response}) => {
    return Promise.reject(response);
  }
);

export default axiosInstance;
