import React from 'react';
import { AsideMenuProvider } from './AsideMenuContext';
import { AuthProvider } from './AuthContext';
import { ToastProvider } from './ToastContext';
import { UserProvider } from './UserContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <UserProvider>
        <AuthProvider>
          <AsideMenuProvider>
            {children} 
          </AsideMenuProvider>
        </AuthProvider>
      </UserProvider>
    </ToastProvider>
  );
};

export default AppProvider;
