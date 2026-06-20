import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
  loginUser,
  registerUser,
  logoutUser,
  fetchCurrentUser,
  clearError,
} from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, error, isInitialized } =
    useSelector((state) => state.auth);

  const login = useCallback(
    (credentials) => dispatch(loginUser(credentials)),
    [dispatch]
  );

  const register = useCallback(
    (userData) => dispatch(registerUser(userData)),
    [dispatch]
  );

  const logout = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const refreshUser = useCallback(
    () => dispatch(fetchCurrentUser()),
    [dispatch]
  );

  const clearAuthError = useCallback(
    () => dispatch(clearError()),
    [dispatch]
  );

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    isInitialized,
    isAdmin: user?.role === 'admin',
    login,
    register,
    logout,
    refreshUser,
    clearAuthError,
  };
};
