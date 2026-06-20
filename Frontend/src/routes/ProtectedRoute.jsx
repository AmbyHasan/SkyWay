import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Spinner } from '../components/ui/Spinner';

export const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isAuthenticated, isLoading, isInitialized, user } = useAuth();
  const location = useLocation();

  if (!isInitialized || isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page and store the original location they tried to reach
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && user?.role !== 'admin') {
    // Redirect non-admins to user dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};
