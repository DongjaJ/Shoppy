import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (user === undefined) return null;

  if (!user || (requireAdmin && !user.isAdmin))
    return <Navigate to="/" replace></Navigate>;

  return children;
}
