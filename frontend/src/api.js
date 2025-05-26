import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', 
  withCredentials: true, 
});

api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export const refreshAccessToken = async () => {
  const refresh = localStorage.getItem('refresh_token');
  if (!refresh) return null;

  try {
    const res = await api.post('/api/token/refresh/', { refresh });
    localStorage.setItem('access_token', res.data.access);
    return res.data.access;
  } catch (err) {
    console.error('❌ Ошибка обновления токена');
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    return null;
  }
};

export const fetchProtectedData = async () => {
  try {
    const res = await api.get('/api/test/');
    return res.data;
  } catch (err) {
    if (err.response?.status === 401) {
      const newAccess = await refreshAccessToken();
      if (newAccess) {
        try {
          const retry = await api.get('/api/test/', {
            headers: { Authorization: `Bearer ${newAccess}` },
          });
          return retry.data;
        } catch (e) {
          console.error('❌ Ошибка при повторном запросе');
          throw e;
        }
      }
    }
    throw err;
  }
};

export default api;

