import api from './api';

export const userService = {
  getMe: () => api.get('/user/me'),
  updateMe: (data) => api.put('/user/me', data),
  changePassword: (data) => api.put('/user/me/password', data),
};
