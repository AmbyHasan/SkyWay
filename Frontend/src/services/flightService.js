import api from './api';

export const flightService = {
  searchFlights: (params) => api.get('/flights', { params }),
  getFeaturedFlights: () => api.get('/flights/featured'),
  getFlightById: (id) => api.get(`/flights/${id}`),
  createFlight: (data) => api.post('/flights', data),
  updateFlight: (id, data) => api.put(`/flights/${id}`, data),
  deleteFlight: (id) => api.delete(`/flights/${id}`),
};
