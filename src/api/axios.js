import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://natticharity.eveloth.ru/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// instance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('token');
//       localStorage.removeItem('authUser');
//       window.location.href = '/';
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;