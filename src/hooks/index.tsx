import React from 'react';
import { AsideMenuProvider } from './AsideMenuContext';
import { AuthProvider } from './AuthContext';
import { ModuleModalProvider } from './ModuleModalContext';
import { ToastProvider } from './ToastContext';
import { UserProvider } from './UserContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <UserProvider>
        <AuthProvider>
          <AsideMenuProvider>
            <ModuleModalProvider>
              {children} 
            </ModuleModalProvider>
          </AsideMenuProvider>
        </AuthProvider>
      </UserProvider>
    </ToastProvider>
  );
};

export default AppProvider;
