import React from 'react';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { UserProvider } from './UserContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <UserProvider>
        <AuthProvider>{children} </AuthProvider>
      </UserProvider>
    </ToastProvider>
  );
};

export default AppProvider;
