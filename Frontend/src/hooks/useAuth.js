import { useSelector, useDispatch } from 'react-redux'; //useSelector is used for reading the data from the redux and useDispatch is used send action/thunks to the Redux
import { useCallback } from 'react'; //used for memorizing a function
import {
  loginUser,   //these are action thunks from authSlice
  registerUser,
  logoutUser,
  fetchCurrentUser,
  clearError,
} from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, error, isInitialized } = useSelector((state) => state.auth);

  const login = useCallback(
    (credentials) => dispatch(loginUser(credentials)),
    [dispatch] //react will recreate this function only if dispatch changes , which does not happen usually
  );

  const register = useCallback(
    (userData) => dispatch(registerUser(userData)),   //register(userData) becomes dispatch(registerUser(userData))
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
    login,  //dispatch(loginUser(credentials))
    register,
    logout,
    refreshUser,
    clearAuthError,
  };
};



// Component
// ↓
// useAuth()
// ↓
// authSlice actions + Redux state
// ↓
// authService
// ↓
// api.js
// ↓
// Backend
