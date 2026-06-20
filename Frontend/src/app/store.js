import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/slices/authSlice';
import flightReducer from '../store/slices/flightSlice';
import bookingReducer from '../store/slices/bookingSlice';
import adminReducer from '../store/slices/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    flights: flightReducer,
    bookings: bookingReducer,
    admin: adminReducer,
  },
  devTools: import.meta.env.DEV,
});
