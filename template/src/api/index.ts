import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from './consts';

export interface ApiResponse<T> {
  status: number;
  data: T;
  message: string;
}

axios.interceptors.request.use(
  async (config) => {
    console.log('Request', { url: config.url, ...config.headers, data: config.data });
    const newConfig: AxiosRequestConfig = {
      ...config,
      baseURL: BASE_URL,
      headers: { ...config.headers, 'Content-Type': 'application/json' },
    };

    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  async (response) => {
    console.log('Response', response);
    return response;
  },
  async (error: AxiosError) => {
    console.log('ResponseError', error.message);
  },
);

class APIService {
  // TODO API classes
  // auth = authAPI;

  setToken = (token: string) => {
    axios.defaults.headers['Authorization'] = 'Bearer ' + token;
  };

  clearToken = () => {
    axios.defaults.headers['Authorization'] = null;
  };

}

const API = new APIService();
export default API;
