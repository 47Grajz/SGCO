
import axios from 'axios';
import { getCookie } from '@/src/utils/utils';

const api = axios.create({
  baseURL: 'https://adso-shinydesk.onrender.com/api/v1',
});


api.interceptors.request.use((config) => {
    const token = getCookie("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


  export default api;